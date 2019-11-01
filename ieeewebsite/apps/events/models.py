from django.db import models
import datetime
from django.utils import timezone

# Create your models here.

status_options = ( 'Completed' , 'Ongoing' , 'Upcoming')

class Events(models.Model):
    Event_Name = models.CharField(max_length = 30,help_text= "Name Of the Event")
    Discription = models.CharField(max_length = 500,help_text= "Small description about the Event",blank=True,null=True)
    Event_Date = models.DateField( default=datetime.date.today())
    Event_Time =  models.TimeField( default=timezone.now)
    Details = models.CharField(max_length = 500,help_text= "Details about the Event",blank=True,null=True)
    Event_status = models.CharField(choices = status_options,help_text= "Status of the Event",default="Completed")
    Display_img = models.ImageField(upload_to="/uploads/events/images/CoverImage", help_text = "Cover Image Of the event",blank=True,null=True)

    def __str__(self):
        return self.Event_Name+" "+str(self.Event_Date)

    
