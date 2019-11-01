from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# from .models import Team
# Create your views here.

def home(req):
    return render(req,"team.html",{ 'title':'IEEE Home' })