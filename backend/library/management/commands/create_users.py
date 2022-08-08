from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string
from library.models import CustomUser
import secrets
from random import randint


class Command(BaseCommand):
    help = 'Create random users: python manage.py create_users 10'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Indicates the number of users to be created')

    def handle(self, *args, **kwargs):
        total = kwargs['total']
        for i in range(total):
            try:
                random_username = 'user_' + str(randint(1, 10000))
                CustomUser.objects.create_user(username=random_username,
                                               first_name=random_username + ' first_name',
                                               last_name=random_username + ' last_name',
                                               email=(random_username + "@gmail.com"),
                                               password=secrets.token_urlsafe(15))
            except Exception as e:
                print(e)
                continue
