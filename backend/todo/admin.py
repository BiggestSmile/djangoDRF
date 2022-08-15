from django.contrib import admin
from todo.models import Project, ToDo
from django.contrib import admin

# Register your models here.
# admin.site.register(Project, ToDo)


# class ToDoAdmin(admin.ModelAdmin):
#     list_display = ['name', 'text', 'project', 'user']
#     model = ToDo
#
#     def save_model(self, request, obj, form, change):
#         if getattr(obj, 'user', None) is None:
#             obj.author = request.user
#         obj.save()
