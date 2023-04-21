from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import User


# title, task text, status (completed / incomplete)
class Task(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

# insult, intensity, task_id of task for which insult is being used
class Insult(models.Model):
    description = models.TextField()
    intensity = models.IntegerField()
    task_id = models.IntegerField()

    def _str_(self):
        return self.description

"""""
# user, user intensity
class User(models.Model):
    username = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    userIntensity = models.TextField(max_length=200)

    def __str__(self):
        return self.username
    
# author, insult text, intensity
class Insult(models.Model):
    text = models.TextField(max_length=200)
    insultIntensity = models.IntegerField()

    def publish(self):
        self.save()

    def __str__(self):
        return self.title

insults = [
    ('Get up off your lazy bum and do _____', 1),
    ('If you don\'t _____, nobody will love you', 2),
    ('Go ____, you worthless piece of s#!$', 3),
]

# Create Insult objects and save them to the database
for text, intensity in insults:
    insult = Insult(text=text, insultIntensity=intensity)
    insult.dateTime = timezone.now()
    insult.save()
"""