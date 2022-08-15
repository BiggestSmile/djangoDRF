from rest_framework.viewsets import ModelViewSet
from todo.models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()


class ToDoUserModelViewSet(ModelViewSet):
    serializer_class = ToDoModelSerializer
    queryset = ToDo.objects.all()
