from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import *
# Create your views here.

def events(req):
    context_variable = { 
        'title':'IEEE Events',
        'event_slides': event_slides.objects.all().order_by('Image_number'),
        'upcoming_events': list(Event.objects.filter(Event_status='UPC').order_by('Event_Date')),
        'events':list(Event.objects.all().order_by('Event_Date')) }
    return render(req,"Event.html",context_variable)