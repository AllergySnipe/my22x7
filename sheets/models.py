from django.db import models

# Create your models here.

class Sheet(models.Model):
    title = models.CharField(max_length=30) 
    sheet = models.FileField(upload_to='uploaded_sheets/')

class CustomQuery(models.Model):
    start_month = models.IntegerField()
    end_month = models.IntegerField()
    start_year = models.IntegerField()
    end_year = models.IntegerField()
    tablename = models.CharField(max_length=32)
    district = models.CharField(max_length=32)

    