from django.http import JsonResponse
from django.shortcuts import render, redirect 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from .serializers import TaskSerializer, InsultSerializer
from .models import Task, Insult
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class InsultView(viewsets.ModelViewSet):
    serializer_class = InsultSerializer
    queryset = Insult.objects.all()

# Rest api endpoint
def get_task_list(request):
    """
    Returns Json list of all restaurants
    """
    if request.method == "GET":
        task_list = Task.objects.order_by('-completed')
        serializer = TaskSerializer(task_list, many=True)
        return JsonResponse(serializer.data, safe=False)

# Rest api end point
def get_insult_list(request):
    """
    Returns Json list of all restaurants
    """
    if request.method == "GET":
        ins_list = Insult.objects.order_by('-completed')
        serializer = InsultSerializer(ins_list, many=True)
        return JsonResponse(serializer.data, safe=False)

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

def delete_view(request):
    task = Task.objects.get(text=request.GET['text'])
    if Task.author == request.user:
        task.delete()
    return redirect('/')