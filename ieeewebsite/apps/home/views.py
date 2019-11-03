from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# from .models import Team
# Create your views here.

def home(req):
    return render(req,"index.html",{ 'title':'IEEE Home' })

def error(req):
    return render(req,"error/PageNotFound.html",{'title':'Error - Page Not Found'})

def construction(req):
    return render(req,"error/UnderConstruction.html",{ 'title':'Page Updating Soon' })
