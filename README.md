# docker-node-mongo

Basic dockerized server using Node and MongoDB. It shows through a simple example following MVC architecture the basic setup needed to build a server with docker and connect from node Node.js server to MongoDB.

Following the [Microservices architecture], the system consists on two services that run in separate containers:

+ Web service: [node.js] server. Using the official [node image].
+ Database service: [MongoDB] database. Using the official [mongo image].


## Demo

Yo can find a demo, working [here]

## Using MongoDB replica sets
You just need to use the ```docker-compose.rps.yml``` compose file:


```groovy
$ docker-compose -f docker-compose.rps.yml up
// connect in your browser to <host IP>:8080
```

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
No download needed, images will pull automatically.

```groovy
// run mongo service
$ docker run -v "$(pwd)"/database:/data --name mongo_db -d mongo mongod --smallfiles
// run docker-node-mongo image
$ docker run -d --name node_server --link mongo_db:db -p 8080:3000 ageapps/docker-node-mongo
// connect in your browser to <host IP>:8080
```

## Usage in a cluster with k8s
Try running it in [minikube] with the following commands
```groovy
$ minikube start --vm-driver=xhyve
$ kubectl config use-context minikube
$ eval $(minikube docker-env)
$ docker pull mongo
$ kubectl create -f k8s-mongo.yml
$ docker build -t node-mongo:v1 .
$ kubectl create -f k8s-app.yml
// to clean the cluster and get docker local context
$ kubectl delete -f .
$ eval $(minikube docker-env -u) 
```


## Resources
+ [Docker]: Software containerization platform
+ [node.js]: Server enviroment.
+ [MongoDB]: NoSQL database system.
+ [mongoose]: MongoDB object modeling for *node.js*.
+ [docker-build]: Automated build of *Docker* images.
+ [docker-compose]: Automated configuration and run of multi-container *Docker* applications.
+ [Kubernetes]: open-source system for automating deployment, scaling, and management of containerized applications.

[here]: http://swarm1397.cloudhero.io:8081/
[Microservices architecture]: http://microservices.io/patterns/microservices.html
[node image]: https://hub.docker.com/_/node/
[mongo image]: https://hub.docker.com/_/mongo/
[MongoDB]: https://www.mongodb.com
[mongoose]: http://mongoosejs.com/index.html
[node.js]: http://nodejs.org
[Docker]: https://docs.docker.com/
[docker-compose]:https://docs.docker.com/compose/compose-file/
[docker-build]:https://docs.docker.com/engine/reference/builder/
[minikube]:https://github.com/kubernetes/minikube
[Kubernetes]:https://kubernetes.io/