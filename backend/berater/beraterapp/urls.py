from django.urls import path
from . import views

urlpatterns = [
    path('', views.beraterapp_view, name='beraterapp_view'),
    # path('', views.create_task, name="create_task"),
    # path('', views.create_insult, name="create_insult"),
    path('splash/', views.splash_view, name='splash_view'),
    path('login/', views.login_view, name='login_view'), 
    path('signup/', views.signup_view, name='signup_view'), 
    path('logout/', views.logout_view, name='logout_view'),
    path('delete/', views.delete_view, name='delete_view'),
]