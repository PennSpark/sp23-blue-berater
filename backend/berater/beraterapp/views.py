from django.shortcuts import render
from django.utils import timezone
from .models import Task

def task_list(request):
    tasks = Task.objects.order_by('published_date')
    return render(request, 'beraterapp/task_list.html', {'tasks': tasks})
