# Basic-Docker-Implementaion

* Docker facilitates the running of configured images within multiple containers.
* Docker allows you to package and distribute applications in the form of containers.
* Docker making it easier to deploy and run applications consistently across different environments.

* This is a pictorial representation
![Untitled Diagram drawio](https://github.com/NishantSatere/Basic-Docker-Implementaion/assets/100207648/0f291c18-1f09-4e31-8ac7-55c54bdb8d05)

# Basic commonds

* To list all images
```docker
docker images ls
```

* To list all running containers
``` docker
docker ps
```
* To list all containers
```docker
docker conatainer -a

-a: stands for all
```

* To create and run container
```docker
docker run -it <image_name>

it: These are options often used together.
-i stands for interactive,
-t allocates a pseudo-TTY (terminal).
This combination allows you to interact with the container's shell.
```
* To run existsing container
```docker
docker exec -it <container_name or container_id> bash
```
* To execute a specific terminal command within a running Docker container from outside the container.
```docker
docker exec <container_name> <command>
```

# PORT mapping

Port mapping in Docker allows you to expose and map ports between the host system and containers. This enables external communication with services running inside the Docker containers. 

* command for port mapping
```docker
docker run -p <host_port> : <container_port> <image_name>
```

# Passing enviroment variables
```docker
docker run -p <host_port> -e <key> = <value> : <container_port> <image_name>
```

# Dockerization of Node.js Application

**Step 1:** Create a Dockerfile. Refer to the Dockerfile located in the 'sec' folder.

**Step 2:** Build the Docker image.

```docker
docker build -t <image_name> <path>
```
Replace <image_name> with the desired name for your Docker image and <path> with the directory path containing the files needed for the Docker image.

# Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to manage and run multiple Docker containers as a single application.


![Untitled Diagram drawio (1)](https://github.com/NishantSatere/Basic-Docker-Implementaion/assets/100207648/548b0878-bd45-4a3b-b59e-edfef3661be2)

*  Initializes and starts all the services defined in the docker-compose.yml file. It's used to bring up the entire application stack.
```docker
docker compose up
```

* Sometimes, Mac and Linux users may encounter a "permission denied" error when running Docker commands. In such cases, use 'sudo' before the command:
```docker
sudo docker compose up
```

* To remove all containers
```docker
docker compose down
```


# Networking

**Brdige**

Dockers default network driver is **Bridge**

Allows containers on the same network to communicate with each other, but they are isolated from external networks by default. 
Bridge networks use a software bridge that allows containers to connect to each other using internal IP addresses. 
This type of network is commonly used for communication between containers within the same application.
Here port mapping is required.

**Host**

* To change the network driver
```docker
docekr run -it --network=<network_driver_name> <image_name>
```
The container has direct access to the network interfaces of the host machine.
Network isolation between the host and the container is reduced or eliminated.
Containers in host mode can directly bind to host ports without port mapping.

**None**

The container has no network access.

# Create custom newtorks
```docker
docker network create -d <type_of_driver> <name_of_custom_network>
```

# Volume Mounting

Volume mounting in Docker is a mechanism that allows you to persist and share data between a host machine and a container.

![Untitled Diagram drawio (2)](https://github.com/NishantSatere/Basic-Docker-Implementaion/assets/100207648/5a9ddac1-0d5a-414f-a850-bfc0704317a9)


```docker
docker run -v /host/path:/container/path <image_name>
```

Involves linking a directory or file from the host to a directory in the container.
Enables data persistence, allowing data to survive container restarts or removal.
Provides a way to share data between the host and container.
Commonly used for storing configuration files, databases, or any data that needs to persist beyond the container's lifecycle.
