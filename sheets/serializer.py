from rest_framework import serializers 
from . models import *
  
class SheetSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Sheet 
        fields = ['title', 'sheet'] 

class CustomQuerySerializer(serializers.ModelSerializer): 
    class Meta: 
        model = CustomQuery 
        fields = ['start_month', 'end_month', 'start_year', 'end_year', 'tablename', 'district'] 