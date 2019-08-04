from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics

class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer