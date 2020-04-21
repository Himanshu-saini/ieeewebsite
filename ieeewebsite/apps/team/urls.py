from django.urls import path, re_path
from . import views

app_name="team"
urlpatterns = [
    re_path(r"^$",views.team,name="index"),
]
