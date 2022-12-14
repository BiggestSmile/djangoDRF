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
class TestProjectModelViewSet(TestCase):
    def test_get_detail(self):
        project = mixer.blend(Project)
        client = APIClient()
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com',
                                                    'admin123456')
        client.login(username='admin', password='admin123456')

        response = client.get(f'/api/projects/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        client.logout()

    def test_put_detail(self):
        client = APIClient()
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com',
                                                    'admin123456')
        # project = Project.objects.create({'name': 'TestProject_XXX',
        #                                   'repo_link': 'https://TestProject_XXX.git.com',
        #                                   'users': admin,
        #                                   })
        project = mixer.blend(Project)
        client.login(username='admin', password='admin123456')
        response = client.put(f'/api/projects/{project.id}/', {'name': 'TestProject',
                                                               'repo_link': 'https://TestProject.git.com',
                                                               # 'users': admin,
                                                               }
                              )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        project = Project.objects.get(id=project.id)
        self.assertEqual(project.name, 'TestProject')
        self.assertEqual(project.repo_link, 'https://TestProject.git.com')
        # self.assertEqual(project.users, admin)
        client.logout()


class TestToDoUserModelViewSet(APITestCase):
    def test_get_list(self):
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com',
                                                    'admin123456')
        self.client.login(username='admin', password='admin123456')
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_mixer(self):
        todo = mixer.blend(ToDo, user__name='Admin666')
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com',
                                                    'admin123456')
        self.client.login(username='admin', password='admin123456')
        response = self.client.put(f'/api/todos/{todo.id}/',
                                   {
                                       'name': 'TEST_NAME',
                                       'text': 'TEST_TEXT',
                                       'project': todo.project.id,
                                       'user': todo.user.id,
                                       'is_active': True,
                                       'created_at': todo.created_at,
                                       'updated_at': todo.updated_at,
                                   })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = ToDo.objects.get(id=todo.id)
        self.assertEqual(todo.name, 'TEST_NAME')
