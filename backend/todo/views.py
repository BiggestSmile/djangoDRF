from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from todo.models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer

from rest_framework.pagination import LimitOffsetPagination


class ProjectModelViewSetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectModelViewSetPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['name']
    search_fields = ['name']


class ToDoUserModelViewSet(ModelViewSet):
    serializer_class = ToDoModelSerializer
    queryset = ToDo.objects.all()
