# Generated by Django 3.0.6 on 2020-08-12 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_auto_20200812_2303'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event_slides',
            name='Display_img',
            field=models.ImageField(default='events/images/poster/Default_poster.jpg', help_text='Cover Image Of the event', upload_to='events/images/poster'),
        ),
    ]