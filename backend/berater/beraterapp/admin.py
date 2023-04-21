from django.contrib import admin
from .models import Task, Insult

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
class InsultAdmin(admin.ModelAdmin):
    list_display = ('description', 'intensity')

# Register your models here.
admin.site.register(Task, TaskAdmin) 
admin.site.register(Insult, InsultAdmin) 

#admin.site.register(Insult)
#admin.site.register(User)

