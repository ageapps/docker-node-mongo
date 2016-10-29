# docker-node-mongo

Basic dockerized server using Node and MongoDB. It shows through a simple example following MVC architecture the basic setup needed to build a server with docker and connect from node Node.js server to MongoDB.

Following the [Microservices architecture], the system consists on two services that run in separate containers:

+ Web service: [node.js] server. Using the official [node image].
+ Database service: [MongoDB] database. Using the official [mongo image].


## Demo

Yo can find a demo, working [here]

## Usage with git
Downloading the source code

```groovy
$ git clone https://github.com/ageapps/docker-node-mongo.git
$ cd docker-node-demo
$ docker-compose up
// connect in your browser to <host IP>:8080
```

## Usage with docker-compose, without source code
Just download docker-compose file to pull all images and build the app.

```groovy
// download docker-compose file
$ curl https://raw.githubusercontent.com/ageapps/docker-node-mongo/master/docker-hub-compose.yml -o docker-compose.yml
// run application
$ docker-compose up
// connect in your browser to <host IP>:8080
```

## Usage with Docker Hub
No download needed, images will pull

```groovy
// run mongo service
$ docker run -v "$(pwd)"/database:/data --name mongo -d mongo mongod --smallfiles
// run docker-node-mongo image
$ docker run -d --name node_server -v "$(pwd)/database":/data --link mongo:db -p 8080:3000 ageapps/docker-node-mongo
// connect in your browser to <host IP>:8080
```

## Resources
+ [Docker]: Software containerization platform
+ [node.js]: Server enviroment.
+ [MongoDB]: NoSQL database system.
+ [mongoose]: MongoDB object modeling for *node.js*.
+ [docker-build]: Automated build of *Docker* images.
+ [docker-compose]: Automated configuration and run of multi-container *Docker* applications.


[here]: http://swarm1397.cloudhero.io:8080/
[Microservices architecture]: http://microservices.io/patterns/microservices.html
[node image]: https://hub.docker.com/_/node/
[mongo image]: https://hub.docker.com/_/mongo/
[MongoDB]: https://www.mongodb.com
[mongoose]: http://mongoosejs.com/index.html
[node.js]: http://nodejs.org
[Docker]: https://docs.docker.com/
[docker-compose]:https://docs.docker.com/compose/compose-file/
[docker-build]:https://docs.docker.com/engine/reference/builder/
