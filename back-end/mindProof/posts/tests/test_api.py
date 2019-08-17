from unittest import TestCase
from rest_framework.test import RequestsClient
from ..tests.base import UnitTest
from django.contrib.auth import get_user_model
from ..models import Post
import time
User = get_user_model()
class TestAPIGet(TestCase, UnitTest):

    def test_client_gets_200(self):
        client= RequestsClient()
        response = client.get("http://localhost:8000/api/posts/")
        self.assertEqual(response.status_code, 200)

    def test_can_assign_author(self):
        client=RequestsClient()
        super().get_dummy_post("first post")
        response = client.get("http://localhost:8000/api/posts/")
        self.assertEqual(len(response.text),1)
