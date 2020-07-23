

# About ACE-RZ

Application Client Environment Framework & RayZ CLI tool for creating JSON configuration files with predefined components,routes & database configuration.


# Getting started

## Installation


Clone the repository

    git clone https://github.com/ccolombijn/ace-rz.git

Switch to the repo folder

    cd ace-rz

Install all the dependencies using composer

    npm install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Switch to rz folder

    cd rz

Generate a new application key

    node rz key:generate


Run the database migrations (**Set the database connection in .env before migrating**)

    node rz migrate

Start the local development server

    node rz serve

You can now access the server at http://localhost:8000

**TL;DR command list**

    git clone https://github.com/ccolombijn/ace-rz.git
    cd ace-rz
    npm install
    cp .env.example .env
    cd rz
    node rz key:generate
    
**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    node rz migrate

## Database seeding

**Populate the database with seed data with relationships which includes users, accounts, categories, subjects, targets, levels and sublevels.**
**This can help you to quickly start testing the API or couple a front-end and start using it with ready content.**


Run the database seeder and you're done.

    node rz db:seed

***Note*** : It's recommended to have a clean database before seeding.
You can refresh your migrations at any point to clean the database by running the following command:

    node rz migrate:refresh

----------

# Code overview

## Folders

- `app` - Contains all the application files
- `assets` - Contains all the application assets
- `assets/ace` - Application Client Environment Framework files
- `rz` - RayZ CLI Tool files
- `controllers` - Contains all the controllers
- `config` - Contains all the application configuration files
- `database/factories` - Contains the model factory for all the models
- `database/migrations` - Contains all the database migrations
- `database/seeds` - Contains all the database seeders
- `routes` - Contains all the application routes 
- `models` - Contains all the application models 
- `views` - Contains all the application views

## Environment variables

- `.env` - Environment variables can be set in this file





