from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

def about(req):
    return render(req,"about.html",{ 'title':'IEEE About' })

