from rest_framework import serializers
from .models import Task, Insult

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'completed')

class InsultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insult
        fields = ('id', 'description', 'intensity', 'task_id')