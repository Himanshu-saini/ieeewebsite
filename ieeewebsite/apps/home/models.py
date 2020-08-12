from django.db import models

# Create your models here.

class home_slides(models.Model):
    Display_img = models.ImageField(upload_to="home/images/cover_photo",default="home/images/cover_photo/IEEE_cover1.jpg", help_text = "Cover Image Of the event",blank=False,null=False)
    About_image = models.CharField(max_length = 20,help_text= "The Alternate text for image",blank=True,null=True)
    Image_number = models.IntegerField(unique=True,blank=False,null=False,help_text="Order of images")

    def __str__(self):
        return str(self.Image_number)+" "+self.About_image


