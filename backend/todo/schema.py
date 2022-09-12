import graphene
from graphene_django import DjangoObjectType
from todo.models import Project, ToDo
from library.models import CustomUser


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class CustomUserType(DjangoObjectType):
    class Meta:
        model = CustomUser
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)

    def resolve_all_todos(root, info):
        return ToDo.objects.all()


    all_projects = graphene.List(ProjectType)

    def resolve_all_projects(root, info):
        return Project.objects.all()


    all_users = graphene.List(CustomUserType)

    def resolve_all_users(root, info):
        return CustomUser.objects.all()


schema = graphene.Schema(query=Query)
