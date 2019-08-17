from datetime import datetime
from django.contrib.auth import get_user_model
from ..models import Post
from django.db.utils import IntegrityError

User = get_user_model()

class UnitTest():

    def get_dummy_post(self, title):
        post = Post()
        post.title = title  # pk and identifier, hence hardcoded
        # as Image Field is nullable, this field will be null by default
        post.article = "Hello I am a dummy post"
        post.date_added = datetime.now()
        try:
            random_user = User.objects.create(username="default", email="default@t-online.de", password="dafault")
        except IntegrityError:
            random_user = User.objects.get(username="default")
        post.author = random_user
        post.save()