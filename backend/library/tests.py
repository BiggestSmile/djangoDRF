from django.test import TestCase
import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from library.views import CustomUserModelViewSet
from library.models import CustomUser
from todo.views import ProjectModelViewSet, ToDoUserModelViewSet
from todo.models import Project, ToDo


class TestCustomUserModelViewSet(TestCase):

    def test_get_list_without_auth(self):
        factory = APIRequestFactory()
        request = factory.get('/api/custom-users/')
        view = CustomUserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_get_list_with_auth(self):
        factory = APIRequestFactory()
        request = factory.get('/api/custom-users/')
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com',
                                                    'admin123456')
        force_authenticate(request, admin)
        view = CustomUserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
