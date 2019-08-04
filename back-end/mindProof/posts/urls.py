
from .views import PostView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("posts/", PostView.as_view(), name="all posts")
]