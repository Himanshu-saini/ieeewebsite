from django.urls import path, re_path
from . import views

app_name = "about"
urlpatterns = [
    re_path(r"^$",views.about,name="index"),
]
