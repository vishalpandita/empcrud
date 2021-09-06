# Create your models here.
from django.db import models
class employees(models.Model):
    firstname = models.CharField(max_length=15)
    lastname = models.CharField(max_length=15)
    email = models.EmailField()
    department = models.CharField(max_length=10)
    def __str__(self):
        return self.firstname
