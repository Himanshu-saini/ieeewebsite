from django.db import models
import datetime
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

def current_year():
    return datetime.date.today().year

def year_choices():
    return [(r,r) for r in range(2015, datetime.date.today().year)]

def max_value_current_year(value):
    return MaxValueValidator(current_year())(value)

class Team(models.Model):
    SNo = models.IntegerField(help_text= "Serial Number Of Member Display",default=1)
    Member_Name = models.CharField(max_length = 30,help_text= "Name Of the Team Member")
    Member_Post = models.CharField(max_length = 30,help_text= "Position Of the Team Member")
    Display_img = models.ImageField(upload_to="uploads/team/images/members", help_text = "Display image of the Team member",blank=True,null=True)
    Session_start = models.IntegerField( default=current_year(),validators=[MinValueValidator(2015), max_value_current_year])
    Session_end =  models.IntegerField( default=Session_start)

    def __str__(self):
        return str(self.SNo)+" - "+self.Member_Name

    
