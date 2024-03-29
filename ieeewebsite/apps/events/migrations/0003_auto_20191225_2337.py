# Generated by Django 2.2.3 on 2019-12-25 18:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20191102_0031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='Display_img',
            field=models.ImageField(blank=True, help_text='Cover Image Of the event', null=True, upload_to='events/caver img'),
        ),
        migrations.AlterField(
            model_name='event',
            name='Event_Date',
            field=models.DateField(default=datetime.date(2019, 12, 25)),
        ),
    ]
