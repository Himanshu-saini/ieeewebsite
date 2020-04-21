from django.urls import path, re_path
from . import views

app_name="home"
urlpatterns = [
    re_path(r"^$",views.home,name="index"),
    re_path(r"\w+",views.error,name="error"),
]
