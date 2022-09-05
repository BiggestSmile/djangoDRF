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

# Create your tests here.
