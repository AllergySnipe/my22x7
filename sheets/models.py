from django.db import models
from adaptor.model import CsvModel
from adaptor.fields import CharField, IntegerField

# Create your models here.

class Sheet(models.Model):
    title = models.CharField(max_length=30) 
    sheet = models.FileField(upload_to='uploaded_sheets/')


class Corona(CsvModel):
    dist_name = CharField()
    active_cases = IntegerField()

    class Meta:
        db_table = "Corona"
        delimiter = ','

