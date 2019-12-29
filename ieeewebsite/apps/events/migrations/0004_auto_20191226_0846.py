# Generated by Django 2.2.3 on 2019-12-26 03:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_auto_20191225_2337'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='Display_img',
            field=models.ImageField(blank=True, help_text='Cover Image Of the event', null=True, upload_to='events/poster'),
        ),
        migrations.AlterField(
            model_name='event',
            name='Event_Date',
            field=models.DateField(default=datetime.date(2019, 12, 26)),
        ),
    ]