from django.db import models
from django.conf import settings
from django.utils import timezone

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

# author, insult text, intensity
class Insult(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField(max_length=200)
    insultIntensity = models.IntegerField()

    def publish(self):
        self.save()

    def __str__(self):
        return self.title

# author, task text, date/time, status (completed / incomplete), intensity
class Task(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField(max_length=200)
    dateTime = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField()

    def publish(self):
        self.save()

    def __str__(self):
        return self.title
    
    # author, task text, date/time, status (completed / incomplete), intensity
class User(models.Model):
    username = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    userIntensity = models.TextField(max_length=200)
    dateTime = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField()