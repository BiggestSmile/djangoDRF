from rest_framework.serializers import ModelSerializer
from library.serializers import CustomUserModelSerializer
from todo.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    # users = CustomUserModelSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        # fields = ['name']
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    # project = ProjectModelSerializer(many=False, read_only=True)
    # user = CustomUserModelSerializer(many=False, read_only=True)

    class Meta:
        model = ToDo
        # fields = ['name']
        fields = '__all__'
