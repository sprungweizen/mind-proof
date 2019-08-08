from unittest import TestCase
from rest_framework.test import RequestsClient

class TestAPIGet(TestCase):
    def test_client_gets_200(self):
        client= RequestsClient()
        response = client.get("http://localhost:8000/api/posts/")
        self.assertEqual(response.status_code, 200)
