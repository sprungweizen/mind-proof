'''this test file intends to test the backend as an isolated object and confront it with sometimes unusual -but never impossible-
 situations. Technically, this test doesnt belong inside the posts directory/app as it is not a unit test anymore'''

from django.test import TestCase
#this import is ugly and needs to be replaced once we introduce CD mechanisms as it will only work in deployment
from ..models import Post
from ..tests import base
from ..tests.base import UnitTest
from django.contrib.auth import get_user_model
import multiprocessing

User = get_user_model



#test whether backend (including the database layer) can handle more than one request at the same time without throwing an error
class TestLoadManagement(TestCase, UnitTest):

    def test_can_process_two_requests_at_the_same_time(self):
        def process1():
            super().get_dummy_post("the first post")
        def process2():
            super().get_dummy_post("the second post")
        p1 = multiprocessing.Process(target=process1)
        p2 = multiprocessing.Process(target=process2)
        #should not raise
        p1.start()
        p2.start()
        p1.join()
        p2.join()
        self.assertEqual(2,len(Post.objects.all()))
        print("[TEST_INFO]: Test test_can_handle_two_requests_at_the_same_time_passed")


