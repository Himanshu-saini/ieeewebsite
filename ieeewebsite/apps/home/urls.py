from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path(r"^home$",views.home),
    re_path(r"^$",views.home),
]
