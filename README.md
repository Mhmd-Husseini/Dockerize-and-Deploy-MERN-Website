# Dockerize and Deploy MERN Stack Application

This repository contains the code for a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that has been Dockerized for easy deployment. The application consists of a frontend, a backend, and an Nginx server acting as a reverse proxy and handling SSL certification.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Local Setup](#local-setup)
- [Deployment on DigitalOcean](#deployment-on-digitalocean)

### Technologies Used

- **Backend**: Express.js
- **Frontend**: React.js
- **Database**: MongoDB (Atlas)
- **Containerization**: Docker
- **Web Server**: Nginx
- **SSL**: Let's Encrypt Certbot

### Local Setup

#### Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js installed for local development.

#### Steps

1. Clone this repository:
   
   git clone https://github.com/Mhmd-Husseini/Dockerizing-MERN-app.git
   cd Dockerizing-MERN-app
   
3. Install dependencies:
   
   Navigate to the root directory and install dependencies: npm install.
   
2. Set up MongoDB Atlas:

   Replace the MONGODB_URI in the backend .env (refer to .env-example) file with your Atlas connection string.
  
4. Running the application:

   Start frontend: Specify command for launching frontend development server.

   Start backend: Provide command for starting backend server.

   note: You can also start it by building and running docker containers.
  
6. Access the frontend at http://localhost:3000.
   

### Deployment on DigitalOcean

#### Prerequisites
A DigitalOcean account

A domain name (e.g., husseini.hopto.org)

#### Steps
1. Spin up a Droplet on DigitalOcean with Docker pre-installed.

2. Clone this repository onto the Droplet:

     git clone https://github.com/Mhmd-Husseini/Dockerizing-MERN-app.git
  
     cd Dockerizing-MERN-app
  
3. Update the Nginx configuration (nginx/default.conf) with your domain name:

  server {
  
      listen 443 ssl;
      
      server_name your_domain.com;
      
      ssl_certificate /etc/letsencrypt/live/your_domain.com/fullchain.pem;
      
      ssl_certificate_key /etc/letsencrypt/live/your_domain.com/privkey.pem;
      
      # Other SSL configurations like SSL protocols, ciphers, etc.
      
      # ...
  } 
  
4. Run Certbot to generate SSL certificates:

     sudo certbot certonly --nginx -d your_domain.com -d www.your_domain.com --email your_email@example.com
  
5. To run production, use `docker-compose -f docker-compose-prod.yml up`

6. Access your deployed application at https://your_domain.com (e.g., husseini.hopto.org).
