# Generated by Django 2.2.3 on 2019-12-26 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_auto_20191226_0846'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='Display_img',
            field=models.ImageField(blank=True, help_text='Cover Image Of the event', null=True, upload_to='events/images/poster'),
        ),
    ]
