from django.db import models
from library.models import CustomUser


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=64)
    repo_link = models.URLField(blank=True, null=True)
    users = models.ManyToManyField(CustomUser, blank=True, default=None)

    def __str__(self):
        return f'{self.id}. {self.name} __ {self.repo_link} __ {self.users}'


class ToDo(models.Model):
    name = models.CharField(max_length=64)
    text = models.TextField(blank=True, null=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    is_active = models.BooleanField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.id}. {self.name} __ {self.project} __ {self.user} __ {self.updated_at}'

