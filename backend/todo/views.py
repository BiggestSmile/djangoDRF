from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from todo.models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer

from rest_framework.pagination import LimitOffsetPagination


class ProjectModelViewSetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoModelViewSetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectModelViewSetPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['name']
    search_fields = ['name']


class ToDoUserModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoModelViewSetPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['project']

    def destroy(self, request, *args, **kwargs):
        entity = self.get_object()
        entity.is_active = False
        entity.save()
        return Response(data='delete success')
