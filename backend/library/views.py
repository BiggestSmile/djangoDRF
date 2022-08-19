from rest_framework.viewsets import ModelViewSet
from .models import Author, CustomUser
from .serializers import AuthorModelSerializer, CustomUserModelSerializer
from rest_framework.response import Response


class AuthorModelViewSet(ModelViewSet):
    serializer_class = AuthorModelSerializer
    queryset = Author.objects.all()


class CustomUserModelViewSet(ModelViewSet):
    serializer_class = CustomUserModelSerializer
    queryset = CustomUser.objects.all()

    def destroy(self, request, *args, **kwargs):
        return Response(data='Forbidden operation: DELETE')

    def create(self, request, *args, **kwargs):
        return Response(data='Forbidden operation: CREATE')
