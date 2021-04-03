from django.shortcuts import render 
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
import csv, json
from django.core import serializers
# Create your views here. 

class SheetView(APIView): 

    serializer_class = SheetSerializer 

    def get(self, request):
        #e=Sheet.objects.get(title='t3')
        #(make_json(e.sheet))[1]
        mydetail = [ {"title": detail.title,"sheet": make_json(detail.sheet)}
        for detail in Sheet.objects.all()] 
        return Response(mydetail) 

    def post(self, request): 

        serializer = SheetSerializer(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save()
            return Response(make_json((serializer.data["sheet"])[1:]))

def make_json(csvFilePath):

    data={}
    csvFilePath = r"{}".format(csvFilePath)
    with open(csvFilePath, encoding='utf-8-sig') as csvf:
        csvReader = csv.DictReader(csvf)
        a=0
        for rows in csvReader:
            key = a
            a+=1
            data[key] = rows
        return data