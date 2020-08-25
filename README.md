# Maize Product Details _back-end overhaul_

> Main product service on e-commerce site to showcase details, styles, and  a number of images for each product. My work in optimizing throughput and latency of CRUD server/routes and the database with a great volume of data. Specifically 10,000,000 distinct products, each with at least 5 reviews and 5 images. Deployed on AWS EC2 T2.micro instances to minimize cost, increase challenge of optimizing with minimal computing power.

- Local performance goals of at least 1,000 requests per second with 50 millisecond or less response time and at most 1% error rate

![pooltest5](/poolloadtest5.png)

_Local Artillery.io test showing result of 1,246 resquests per second, median response of 9.6 milliseconds, and 0 errors_

- Deployed performance goals of at least 200 requests per second with 2,000 millisecond or less response time and at most 1% error rate
![4EC2test](/4EC2test.png)

_New Relic page showing Loader.io testing of deployed EC2 instances with result of 616 requests per second, 22.3 millisecond average response time and 0 errors_

## Related Projects

  - https://github.com/serial-SQLizers/reviewsService
  - https://github.com/serial-SQLizers/QnA
  
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Few steps to get spinning... 
- Firstly docker-compose up will start the express server and postgreSQL db.  
- Populate the database using the docker exec -it command on the express server container, npm run dataWriter.
- Service is now running with 10,000,000 products in the database.

## Requirements

- Docker
- Docker-compose

## Development

- PostgreSQL database
- Express.js server
- React.js front-end
- Containerized with Docker

