from rest_framework import serializers 
from . models import *
  
class SheetSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Sheet 
        fields = ['title', 'sheet'] 