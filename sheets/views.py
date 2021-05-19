from django.shortcuts import render
from rest_framework.views import APIView
from . models import Sheet
from rest_framework.response import Response
from . serializer import SheetSerializer
import csv
import json
from django.core import serializers
import mysql.connector
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
BASE_DIR = str(BASE_DIR).replace("\\", "/")
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="dep"
)


class SheetView(APIView):

    serializer_class = SheetSerializer

    def get(self, request):
        mydetail = [{"title": detail.title, "sheet": make_json(detail.title, detail.sheet, 0, 1)}
                    for detail in Sheet.objects.all()]
        return Response(mydetail)

    def post(self, request):

        serializer = SheetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(make_json(serializer.data["title"], (serializer.data["sheet"])[1:], 1, 1))


class PositivityView(APIView):

    serializer_class = SheetSerializer

    def get(self, request):
        # e=Sheet.objects.get(title='t3')
        # (make_json(e.sheet))[1]
        mydetail = [{"title": detail.title, "sheet": make_json(detail.title, detail.sheet, 0, 2)}
                    for detail in Sheet.objects.all()]
        return Response(mydetail)

    def post(self, request):

        serializer = SheetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(make_json(serializer.data["title"], (serializer.data["sheet"])[1:], 1, 2))


def make_json(title, csvFilePath, flag, ignorerows):

    data = {}
    print(title)
    csvFilePath = r"{}".format(csvFilePath)
    with open(csvFilePath, encoding='utf-8-sig') as csvf:
        csvReader = csv.DictReader(csvf)
        a = 0
        for rows in csvReader:
            key = a
            a += 1
            data[key] = rows
        if(flag == 1):
            print(csvFilePath)
            importCsvToDB(title, csvFilePath, ignorerows)
        return data


def importCsvToDB(tablename, path, ignorerows):
    query = "LOAD DATA INFILE '"+BASE_DIR+"/"+path+"' INTO TABLE " + \
        tablename+" FIELDS TERMINATED BY ',' ENCLOSED BY '\"' IGNORE " + \
            str(ignorerows) + " ROWS;"
    print(query)
    mycursor = mydb.cursor()
    mycursor.execute(query)
    mydb.commit()


class CustomQueryView(APIView):

    def get(self, request):
        start_month = request.GET.get('start_month')
        end_month = request.GET.get('end_month')
        start_year = request.GET.get('start_year')
        end_year = request.GET.get('end_year')
        tablename = request.GET.get('tablename')
        district = request.GET.get('district')
        mycursor = mydb.cursor()

        sql = "SELECT * FROM " + tablename + " WHERE ((year >" + start_year + " and year <" + end_year + ") or (year = " + start_year + " and month >= " + start_month + " and year = " + end_year + " and month <= " + end_month + \
            ") or (year > " + start_year + " and year = " + end_year + " and month <= " + end_month + ") or (year = " + \
            start_year + " and month >= " + start_month + " and year < " + \
            end_year + ")) and district = '" + district + "'"

        mycursor.execute(sql)
        myresult = [dict((mycursor.description[i][0], value)
                         for i, value in enumerate(row)) for row in mycursor.fetchall()]
        return Response(myresult)


class PositivityQueryView(APIView):

    def get(self, request):
        tablename = 'positivity_report'
        SubDivision = request.GET.get('SubDivision')
        sub1 = SubDivision + " Sample"
        sub2 = SubDivision + " Positive"
        start_date = request.GET.get('start_date')
        end_date = request.GET.get('end_date')
        mycursor = mydb.cursor()
        covidsql = "SELECT Date, `" + sub1 + "`, `" + sub2 + "` FROM " + tablename + \
            " WHERE Date >='" + start_date + "' and Date <='" + end_date + "'"
        mycursor.execute(covidsql)

        myresult = [dict((mycursor.description[i][0], value)
                         for i, value in enumerate(row)) for row in mycursor.fetchall()]
        for i in range(len(myresult)):
            myresult[i]['Postivity'] = "{:.2f}".format(
                myresult[i][sub2] * 100 / myresult[i][sub1])
        return Response(myresult)

class TracingQueryView(APIView):

    def get(self, request):
        tablename = request.GET.get('tablename')
        #Block = request.GET.get('Block')
        start_date = request.GET.get('start_date')
        end_date = request.GET.get('end_date')
        mycursor = mydb.cursor()
        covidsql = "SELECT * FROM " + tablename + " WHERE Date >='" + start_date + "' and Date <='" + end_date + "'"
        mycursor.execute(covidsql)
        myresult = [dict((mycursor.description[i][0], value)
                         for i, value in enumerate(row)) for row in mycursor.fetchall()]
        return Response(myresult)