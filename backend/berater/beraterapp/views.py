import json
from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout 
from django.http import JsonResponse
from .models import Task
from .models import Insult
import json

def create_task(request):
    if request.method == 'POST':
        payload = json.loads(request.body)
        task = payload.get('todo_text')
        if task is None:
            return JsonResponse({'error': 'Title is required'}, status=400)
        else:
            Task.objects.create(task_text=Task)
            return JsonResponse({'title': task}, status=201)
    else:
        return JsonResponse({'error': 'Title is required'}, status=400)
    
def create_insult(request):
    if request.method == 'POST':
        payload = json.loads(request.body)
        insult = payload.get('insult_text')
        if insult is None:
            return JsonResponse({'error': 'Title is required'}, status=400)
        else:
            Insult.objects.create(todo_text=insult)
            return JsonResponse({'title': insult}, status=201)
    else:
        return JsonResponse({'error': 'Title is required'}, status=400)
    
def signup_view(request): 
    user = User.objects.create_user( 
        username=request.POST['username'], 
        password=request.POST['password'], 
        email=request.POST['email'], 
    ) 
    login(request, user) 
    return redirect('/')

def login_view(request): 
    username, password = request.POST['username'], request.POST['password'] 
    user = authenticate(username=username, password=password) 
    if user is not None: 
        login(request, user) 
        return redirect('/') 
    else: 
        return redirect('/')
    
def logout_view(request): 
    logout(request) 
    return redirect('/')

