from django.db import models
from django.db.models import UniqueConstraint
from django.db.models.functions import Lower


# Create your models here.

#always python manage.py makemigrations
#python manage.py migrate


class Genere(models.Model):
    genere = models.CharField(max_length=50,null=False, unique=True,verbose_name=("genere"), blank=False)

    class Meta:
        constraints = [
            models.UniqueConstraint(Lower('genere'), name='Genere already exists')
        ]
    
    def __str__(self):
        return self.genere


class Track(models.Model): 
    url = models.CharField(max_length=1000,null=False, unique=True, blank=False)
    name = models.CharField(max_length=50,null=False, blank=False)
    remix = models.BooleanField(null=False)
    generes = models.ManyToManyField(Genere)
    show = models.BooleanField(null=False)


    #relationship con genere




