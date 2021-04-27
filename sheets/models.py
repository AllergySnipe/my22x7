from django.db import models

# Create your models here.

class Sheet(models.Model):
    title = models.CharField(max_length=30) 
    sheet = models.FileField(upload_to='uploaded_sheets/')
    