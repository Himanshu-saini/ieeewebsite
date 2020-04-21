from django.urls import path, re_path
from . import views

app_name = "events"
urlpatterns = [
    re_path(r"^$",views.events,name="index"),
]
