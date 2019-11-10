IEEE WEBSITE

The website is made in django. GUnicorn service and nginx server is used to host the website in production environment.
Here is the step by step guide to setup the website in a linux server.

I have used ubuntu server for hosting.

Prerequisites:
- Ubuntu server
- python 3
- Git (optional)

Download project using Git:
$mkdir gitrepo
$git clone <project-link>

Step 1: Create virtual environment to run our project 
Method 1: 
$pip install virtualenv
$virtualenv projectenv

Method 2:
$python -m pip install venv
$venv projectenv

$soure ~/projectenv/bin/activate   // activate virtual environment

Step 2: installing dependicies to run our project (in virtual environment)

$pip install django
$pip install django-sass-processor
$pip install Pillow

Step 3: install and setup nginx server
$sudo apt-get install nginx

Now, configure Nginx to pass traffic to the process
$sudo nano /etc/nginx/sites-available/<projectname> //here projectname = 'ieeewebsite'

Type the following in file: 
server {
    listen 8000;
    server_name 0.0.0.0;

    location = /favicon.ico { access_log off; log_not_found off; }

    location /static/ {
            root /home/ubuntu/gitrepo/ieeewebsite;
    }
    location /media/ {
            root /home/ubuntu/gitrepo/ieeewebsite;
    }

    location / {
            include proxy_params;
            proxy_pass http://unix:/home/ubuntu/gitrepo/ieeewebsite/ieeewebsite.sock;
    }
}

* Adjust the paths such as /home/ubuntu/gitrepo/ieeewebsite to your own environment.

enable this file by linking it to the sites-enabled folder:
$sudo ln -s /etc/nginx/sites-available/myproject /etc/nginx/sites-enabled

check if our configuration file was correctly written:
$sudo nginx -t

restart Nginx:
$sudo service nginx restart
or
$sudo systemctl restart nginx

Step 4: install gunicorn

$pip install gunicorn

Configure gunicorn 
Method 1: 
gunicorn --bind 0.0.0.0:8000 myproject.wsgi:application
or
gunicorn --daemon --workers 3 --bind unix:/home/ubuntu/gitrepo/ieeewebsite/ieeewebsite.sock ieeewebsite.wsgi

Method 2: create a systemd service file for Gunicorn
$nano /etc/systemd/system/gunicorn.service
and write the following:
[Unit]
Description=gunicorn daemon
After=network.target
[Service]
User=root
Group=www-data
WorkingDirectory=/home/ubuntu/gitrepo/ieeewebsite/
ExecStart=/root/testproject/testprojectenv/bin/gunicorn --access-logfile - --workers 3 --bind unix:/home/ubuntu/gitrepo/ieeewebsite/ieeewebsite.sock ieeewebsite.wsgi:application
[Install]
WantedBy=multi-user.target

start gunicorn service:
$systemctl start gunicorn
$systemctl enable gunicorn

check for any error:
$systemctl status gunicorn
