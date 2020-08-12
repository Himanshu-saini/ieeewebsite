from django.db import models
import datetime

# Create your models here.

status_options = ( ('CMP','Completed') , ('ONG','Ongoing') , ('UPC','Upcoming'))

class Event(models.Model):
    Display_image = models.ImageField(upload_to="events/images/poster",default="events/images/poster/Default_poster.jpg", help_text = "Cover Poster Of the event",blank=False,null=False)
    Event_Name = models.CharField(max_length = 30,help_text= "Name Of the Event (Sub Heading")
    Event_Heading =  models.CharField(max_length = 30,default="IEEE",help_text= "Heading Of the Event. Default = IEEE")
    Event_Date = models.DateField( default=datetime.date.today(),help_text="Date of Event")
    Event_Time =  models.TimeField(help_text="Start time of Event")
    Event_Venue = models.CharField(blank=True,null=True,max_length=50,help_text="Location of Event")
    Details = models.CharField(max_length = 500,help_text= "Details about the Event",blank=True,null=True)
    Event_status = models.CharField(choices = status_options,max_length = 3,help_text= "Status of the Event",default="Completed")
    tags = models.CharField(max_length=100,blank=True,null=True,help_text="Enter Comma seperated tags list")
    
    def __str__(self):
        return self.Event_Name+" "+str(self.Event_Date)

    
class event_slides(models.Model):
    Display_img = models.ImageField(upload_to="events/images/poster", default="events/images/poster/Default_poster.jpg",help_text = "Cover Image Of the event",blank=False,null=False)
    About_image = models.CharField(max_length = 20,help_text= "The Alternate text for image",blank=True,null=True)
    Image_number = models.IntegerField(unique=True,blank=False,null=False,help_text="Order of images")

    def __str__(self):
        return str(self.Image_number)+" "+self.About_image

