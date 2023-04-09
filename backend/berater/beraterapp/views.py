from django.shortcuts import render
from django.utils import timezone
from .models import Task
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from beraterapp.serializers import UserSerializer, GroupSerializer


def task_list(request):
    tasks = Task.objects.order_by('dateTime')
    return render(request, 'beraterapp/task_list.html', {'tasks': tasks})
"""
def insult_list(request):
    insults = Insult.objects.order_by('title')
    return render(request, 'beraterapp/task_list.html', {'insults' : insults})
"""
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]