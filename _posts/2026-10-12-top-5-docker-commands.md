---
layout: post
author: Chris Anderson
title: Top 5 Docker Commands for Everyday Development
subtitle: Learn five useful Docker commands to run, inspect, and manage containers.
tags: Technology Code Docker
categories: Code
thumbnail-img: /assets/img/tech1.png
published: true
---

Docker makes it easier to run applications in consistent environments without installing every dependency directly on your computer. Once you have Docker installed and running, a handful of commands can cover much of your everyday work with containers.

Here are five useful commands to start with. These examples use a small Nginx web server named `docker-demo`, so you can follow them in order. This is a practical starting list rather than a ranking based on usage statistics.

## 1. docker run - Create and Start a Container

Use `docker run` to create a new container from an image and start it.

```bash
docker run -d --name docker-demo -p 127.0.0.1:8080:80 nginx:stable-alpine
```

In this example:

- `-d` runs the container in the background.
- `--name docker-demo` gives it a name you can use in later commands.
- `-p 127.0.0.1:8080:80` connects port 8080 on your computer's loopback address to port 80 inside the container.
- `nginx:stable-alpine` is the image used to run the web server. Docker downloads it if it is not already available locally.

Open [http://localhost:8080](http://localhost:8080) in your browser to see the Nginx welcome page. Port 8080 needs to be available, and the container name must not already be in use.

**Remember:** `docker run` creates a new container each time. To restart an existing stopped container, use `docker start docker-demo` instead.

Read more in the [Docker run documentation](https://docs.docker.com/reference/cli/docker/container/run/).

## 2. docker ps - See Your Containers

Use `docker ps` to list running containers.

```bash
docker ps
```

The output shows container IDs, images, status, port mappings, and names. It is a quick way to check whether your application is running and which port it uses.

To include stopped containers, add `-a`:

```bash
docker ps -a
```

If a container starts and immediately exits, this second command helps you find it before checking its logs.

Read more in the [Docker container listing documentation](https://docs.docker.com/reference/cli/docker/container/ls/).

## 3. docker logs - Read Application Output

Use `docker logs` to inspect the output captured from a container's standard output and standard error streams.

```bash
docker logs docker-demo
```

For recent output and live updates, combine `--tail` with `-f`:

```bash
docker logs --tail 50 -f docker-demo
```

This displays the last 50 lines and follows new output. Refresh the Nginx page in your browser to generate access logs.

Press **Ctrl+C** to stop following the logs. This leaves the container running. Logs written only to files inside a container may need to be inspected separately.

Read more in the [Docker logs documentation](https://docs.docker.com/reference/cli/docker/container/logs/).

## 4. docker exec - Run a Command Inside a Container

Use `docker exec` to run an additional command inside a running container. This is useful for inspecting files or troubleshooting an application.

```bash
docker exec -it docker-demo sh
```

The `-it` flags provide an interactive terminal, and `sh` opens a shell available in this example image. Some images include Bash, while minimal images may not include any shell.

Once inside, inspect the web server's files:

```bash
ls /usr/share/nginx/html
```

Type `exit` to leave the shell. The web server keeps running.

You can also run a command directly without opening an interactive shell:

```bash
docker exec docker-demo nginx -v
```

Read more in the [Docker exec documentation](https://docs.docker.com/reference/cli/docker/container/exec/).

## 5. docker stop - Stop a Container

Use `docker stop` when you are finished working with a running container.

```bash
docker stop docker-demo
```

Docker sends the container's main process its configured stop signal and allows time for it to exit before forcing it to stop if necessary.

Stopping a container does not remove it. You can see it with `docker ps -a` and start it again later:

```bash
docker start docker-demo
```

If you are finished with this example, stop the container and remove it:

```bash
docker stop docker-demo
docker rm docker-demo
```

Removing the container also removes its writable container layer. Keep application data that needs to survive container removal in a volume or bind mount.

Read more in the [Docker stop documentation](https://docs.docker.com/reference/cli/docker/container/stop/).

## Quick Reference

| Task | Command |
| :--- | :--- |
| Create and start the example web server | `docker run -d --name docker-demo -p 127.0.0.1:8080:80 nginx:stable-alpine` |
| List running containers | `docker ps` |
| List all containers | `docker ps -a` |
| Follow recent logs | `docker logs --tail 50 -f docker-demo` |
| Open an interactive shell | `docker exec -it docker-demo sh` |
| Stop the container | `docker stop docker-demo` |

These commands give you a useful routine: start a container, check its status, inspect its logs, troubleshoot inside it, and stop it when you are done.
