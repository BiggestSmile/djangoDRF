from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from todo.models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from rest_framework.decorators import api_view, renderer_classes

from rest_framework.pagination import LimitOffsetPagination

import datetime
from datetime import datetime


class ProjectModelViewSetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoModelViewSetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()
    # pagination_class = ProjectModelViewSetPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['name']
    search_fields = ['name']


class ToDoUserModelViewSet(ModelViewSet):
    # queryset = ToDo.objects.all()
    queryset = ToDo.objects.filter(is_active=True)
    serializer_class = ToDoModelSerializer
    # pagination_class = ToDoModelViewSetPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['project', 'created_at', 'is_active']

    def destroy(self, request, *args, **kwargs):
        entity = self.get_object()
        entity.is_active = False
        entity.save()
        return Response(data='delete success')

    def get_queryset(self):
        """
        http://127.0.0.1:8000/api/todos/?first_date=2022-01-01&last_date=2023-01-01
        """

        try:
            str_first_date = self.request.query_params.get('first_date')
            str_last_date = self.request.query_params.get('last_date')

            first_date = datetime.strptime(str_first_date, '%Y-%m-%d')
            last_date = datetime.strptime(str_last_date, '%Y-%m-%d')

            filtered_queryset = self.queryset.filter(created_at__range=(first_date, last_date))
            return filtered_queryset
        except Exception:
            return self.queryset
