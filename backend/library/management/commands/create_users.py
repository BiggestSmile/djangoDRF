from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string
from library.models import CustomUser
import secrets
from random import randint


class Command(BaseCommand):
    """
    python manage.py create_users 10
    python manage.py create_users 10 -s True
    """
    help = 'Create random users'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Indicates the number of users to be created')

        # Optional argument
        parser.add_argument('-s', '--superuser', type=bool, help='Is it superuser?', )

    def handle(self, *args, **kwargs):
        total = kwargs['total']
        superuser = kwargs['superuser']
        for i in range(total):
            try:
                if superuser:
                    random_username = 'superuser_' + str(randint(1, 10000))
                    user_is_superuser = True
                    user_is_staff = True
                else:
                    random_username = 'user_' + str(randint(1, 10000))
                    user_is_superuser = False
                    user_is_staff = False

                CustomUser.objects.create_user(username=random_username,
                                               first_name=random_username + ' first_name',
                                               last_name=random_username + ' last_name',
                                               email=(random_username + "@gmail.com"),
                                               password=secrets.token_urlsafe(15),
                                               is_superuser=user_is_superuser,
                                               is_staff=user_is_staff, )
            except Exception as e:
                print(e)
                continue
