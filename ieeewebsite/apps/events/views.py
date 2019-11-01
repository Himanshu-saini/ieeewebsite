from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

def events(req):
    return render(req,"events.html",{ 'title':'IEEE Events','Events':range(4),'test':range(5) })

