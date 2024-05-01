# Octo-E-Messages
![Static Badge](https://img.shields.io/badge/Svelte-white?logo=Svelte)
![Static Badge](https://img.shields.io/badge/tailwindcss-black?logo=tailwindcss)
![Static Badge](https://img.shields.io/badge/Resend-blue?logo=Resend)
![Static Badge](https://img.shields.io/badge/Supabase-black?logo=supabase)
![Static Badge](https://img.shields.io/badge/Octoprint-purple?logo=Octoprint)
![Static Badge](https://img.shields.io/badge/GoogleCloud-white?logo=GoogleCloud)
![sc2](https://github.com/ming-060211/EmailResendManagementApp/assets/156335979/6f806027-96b1-4109-9398-2cd704c11535)

## Introduction

<p align="justify">
Octo-E-Messages is an web app that makes it easy to get email and text alerts from your Octoprint managed 3D printers. It takes the http messages from a single or multiple Octoprint instances running the webhook plugin, verifies the attached token is correct and then turns them into email or mobile phone text messages. This allows you or your whole team to know right away when a print is finished or the printer has run out of filament. The web app can be hosted for free for personal use and at low cost for business usage. It can be configured so that individual users can receive both email and text messages or only one. Octo-E-Messages also provide authentication from Supabase which helps to improve control access.  This project is designed to run on google cloud hosting cloud run free tier. 
</p>

## How it works

<p align="justify">
  When an event happens on the 3D printer, it will send an http request to the Octo-E-Messages web app. Octo-E-Messages verifies it is using the correct token key by comparing it with the stored token. It will then use Resend to forward the notification to the mailing list or text messages. After that, the user will receive the message in email or their phone. All Octoprint webhook token keys are encrypted before storage using aes-256-gcm.
</p>

## Installation & Setup

You’ll need
* Git
* Node 18 & npm
* Google cloud account with billing
* Supabase account
* Resend account with billing
* Octoprint instance attached to 3D printer

## Install Node
To run Octo-E-Messages it required Node 18. To install it,
```

Curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install 18
nvm use 18
```

## Setup Supabase account

You will need to create a Supabase Account and Create a Project and get the connection string and anon key from the website, later we will put it into the .env file.

Settings>Database>Connection string> URL (SUPABASEURL)
Settings>API> Project API Keys> anon public (SUPABASEANON)

## Setup Resend

Next you will also need to register an account for Resend.com. To get the api key from Resend…
Api Keys> Create API Keys > Add
Make a note of the api key as you will need to add it to your .env file later.

## Setup Octoprint

In the current project I’m using Ubuntu and these are the instructions to install and run Octoprint.
```

“pip install --upgrade pip wheel”
“pip install octoprint”
“octoprint serve” to run Octoprint
```

https://community.octoprint.org/t/setting-up-octoprint-on-a-raspberry-pi-running-raspberry-pi-os-debian/2337

## Google cloud hosting
### Setup Google Cloud command line tool
To deploy in Google Cloud, It required to register a Google cloud account and install gcloud CLi.
```

Curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-468.0.0-linux-x86_64.tar.gz
```
## Setup Google cloud
```
gcloud init
gcloud login
```

## Clone and install repo
Insert instructions for cloning repo and running npm install

## Setup .env
Before deploying to cloud we need to setup .env file
This is how the .env file will look like…
```

SUPABASE_URL=<supabase_url>
SUPABAE_ANON_KEY=<supabase_anon_key>
RESEND=<resend_key>
```
<p align="justify">
After setting up the .env file it can run the deployment. The project contains a bash script to perform deployment once gcloud is installed and setup. To deploy run run_deployment.sh to execute it

If successfully deployed, try adding a new user into the web application and to see if it successfully added. If it adds, try going to Octoprint to send text messages to the web application. To do this, go to Octoprint> Settings> Webhook> Send Test Webhook. If it is successful the user will receive an email with a message from the 3D printer.
</p>

## Local hosting
If you are running locally not using cloud it required Tunnelmole
To install…
```
curl -O https://install.tunnelmole.com/t357g/install && sudo bash install
npm run dev
tmole <port>
```
Clear Setup for Octoprint Here - https://www.youtube.com/watch?v=E3kHsxSkBAw

## Instructions for web app itself

* Register Account
* Add New User and Activate Email
* Generate Api Key in web app
* Add Website link to Octoprint and Add Generated Key into Webhooks Octoprint
* Trigger Test event in Webhooks Octoprint
* Check email if the message arrives

## Technologies that are used to build this project
![Static Badge](https://img.shields.io/badge/Svelte-white?logo=Svelte)
![Static Badge](https://img.shields.io/badge/tailwindcss-black?logo=tailwindcss)
![Static Badge](https://img.shields.io/badge/Resend-blue?logo=Resend)
![Static Badge](https://img.shields.io/badge/Supabase-black?logo=supabase)
![Static Badge](https://img.shields.io/badge/Octoprint-purple?logo=Octoprint)
![Static Badge](https://img.shields.io/badge/GoogleCloud-white?logo=GoogleCloud)

<p align="justify">
  I have used Sveltekit and Tailwind CSS for the main technologies. Sveltekit is a JavaScript framework and Tailwind CSS is for designing the UI for user interaction with the Web Application. Octoprint is to send messages to the Web Application and Resend will forward the message to the mailing list that is selected to be delivered to. Supabase is for setting up the database to run the Web Application and the Authentication Secure the application.  
</p>
