from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# from .models import Team
# Create your views here.

def team(req):
    return render(req,"team.html",{ 'title':'IEEE Team' })
# ,'present_team':list(Team.objects.all().order_by('SNo')),'prev_team':range(25),'test':range(13),'session': range(3)
