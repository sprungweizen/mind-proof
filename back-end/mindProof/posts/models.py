from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Post(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length=40, primary_key=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null = True) #still not sure what to use here
    article = models.TextField()
    date_added = models.DateTimeField()
    def __str__(self):
        return self.title