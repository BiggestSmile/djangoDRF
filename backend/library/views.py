from rest_framework.viewsets import ModelViewSet
from .models import Author, CustomUser
from .serializers import AuthorModelSerializer, CustomUserModelSerializer, CustomUserModelSerializerV1V2
from rest_framework.response import Response


class AuthorModelViewSet(ModelViewSet):
    serializer_class = AuthorModelSerializer
    queryset = Author.objects.all()


class CustomUserModelViewSet(ModelViewSet):
    serializer_class = CustomUserModelSerializer
    queryset = CustomUser.objects.all()

    # def get_serializer_class(self):
    #     if self.request.version == '1.2':
    #         return CustomUserModelSerializerV1V2
    #     return CustomUserModelSerializer

    def destroy(self, request, *args, **kwargs):
        return Response(data='Forbidden operation: DELETE')

    def create(self, request, *args, **kwargs):
        return Response(data='Forbidden operation: CREATE')


class CustomUserModelViewSetV1V2(CustomUserModelViewSet):
    serializer_class = CustomUserModelSerializerV1V2
