from rest_framework import serializers, viewsets
from .models import Post
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializer (serializers.Serializer):
    class Meta:
        model = User
        fields = ("email", "username")

class PostSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Post
        fields =("image", "title", "article", "date_added")



