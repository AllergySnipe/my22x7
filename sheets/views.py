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
		jsondata = make_json(r'uploaded_sheets/testbook.csv') 
		detail = [ {"title": detail.title,"sheet": jsondata}
		for detail in Sheet.objects.all()] 
		return Response(detail) 

	def post(self, request): 

		serializer = SheetSerializer(data=request.data) 
		if serializer.is_valid(raise_exception=True): 
			serializer.save()
			return Response(serializer.data)

def make_json(csvFilePath):

	data={}
	with open(csvFilePath, encoding='utf-8') as csvf:
		csvReader = csv.DictReader(csvf)
		a=1
		for rows in csvReader:
			key = a
			a+=1
			data[key] = rows
		return data

'''
		for deserialized_object in serializers.deserialize("json", json.dumps(data)):
			if serializers.deserialize.is_valid(raise_exception=True): 
				deserialized_object.save()
	return data
	'''