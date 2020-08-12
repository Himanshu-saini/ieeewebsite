# Generated by Django 3.0.6 on 2020-08-12 17:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_auto_20191226_0855'),
    ]

    operations = [
        migrations.CreateModel(
            name='event_slides',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Display_img', models.ImageField(blank=True, help_text='Cover Image Of the event', null=True, upload_to='events/images/poster')),
                ('About_image', models.CharField(blank=True, help_text='The Alternate text for image', max_length=20, null=True)),
                ('Image_number', models.IntegerField(help_text='Order of images', unique=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='event',
            name='Discription',
        ),
        migrations.RemoveField(
            model_name='event',
            name='Display_img',
        ),
        migrations.AddField(
            model_name='event',
            name='Display_image',
            field=models.ImageField(default='events/images/poster/Default_poster.jpg', help_text='Cover Poster Of the event', upload_to='events/images/poster'),
        ),
        migrations.AddField(
            model_name='event',
            name='Event_Subheading',
            field=models.CharField(default='IEEE', help_text='Sub Heading Of the Event. Default = IEEE', max_length=30),
        ),
        migrations.AddField(
            model_name='event',
            name='Event_Venue',
            field=models.CharField(blank=True, help_text='Location of Event', max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='event',
            name='tags',
            field=models.CharField(blank=True, help_text='Enter Comma seperated tags list', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='Event_Date',
            field=models.DateField(default=datetime.date(2020, 8, 12), help_text='Date of Event'),
        ),
        migrations.AlterField(
            model_name='event',
            name='Event_Name',
            field=models.CharField(help_text='Main Name Of the Event', max_length=30),
        ),
        migrations.AlterField(
            model_name='event',
            name='Event_Time',
            field=models.TimeField(help_text='Start time of Event'),
        ),
    ]
