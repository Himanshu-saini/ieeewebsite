from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import *
# Create your views here.

def home(req):
    Slides = home_slides.objects.all().order_by("Image_number")
    print(Slides)
    return render(req,"index.html",{ 'title':'IEEE Home', 'Slides':Slides })

def error(req):
    return render(req,"error/PageNotFound.html",{'title':'Error - Page Not Found'})

def construction(req):
    return render(req,"error/UnderConstruction.html",{ 'title':'Page Updating Soon' })
