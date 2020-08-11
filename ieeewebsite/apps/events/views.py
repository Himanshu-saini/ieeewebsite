from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Event
# Create your views here.

def events(req):
    return render(req,"Event.html",{ 'title':'IEEE Events','events':list(Event.objects.all().order_by()),'mevents':range(5) })