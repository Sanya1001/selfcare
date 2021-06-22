from django.db import models

# Create your models here.


class Home(models.Model):
    name = models.CharField(max_length=255, default='', blank=True)
    age = models.IntegerField()
    picture = models.ImageField(null=True, blank=True, upload_to='images/')
    description = models.TextField(blank=True, null=True)

    def __str__(self) :
        return self.name

