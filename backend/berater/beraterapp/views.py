from django.shortcuts import render
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

"""
class UserViewSet(viewsets.ModelViewSet):
    # API endpoint that allows users to be viewed or edited.

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


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
"""