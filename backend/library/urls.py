from django.urls import path, include
from rest_framework.routers import DefaultRouter
from library.views import AuthorModelViewSet, CustomUserModelViewSet


app_name = 'library'

router = DefaultRouter()
router.register('custom-users', CustomUserModelViewSet)

urlpatterns = [
    path('library/', include(router.urls)),
]
