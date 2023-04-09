from django.contrib import admin
from .models import Post, Insult, Task, User

admin.site.register(Post)
admin.site.register(Insult)
admin.site.register(Task)
admin.site.register(User)

