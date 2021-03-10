from django.shortcuts import render 
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
# Create your views here. 

class SheetView(APIView): 
	
	serializer_class = SheetSerializer 

	def get(self, request): 
		detail = [ {"title": detail.title,"sheet": detail.sheet}
		for detail in Sheet.objects.all()] 
		return Response(detail) 

	def post(self, request): 

		serializer = SheetSerializer(data=request.data) 
		if serializer.is_valid(raise_exception=True): 
			serializer.save()
			return Response(serializer.data) 

