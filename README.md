# API INMOITTAPI

## PRIMORDIAL
- Crear previamente el volumen "inmoitt-data" usando el comando `docker volume create inmoitt-data`
- Una vez que se haya hecho el comando `docker compose up -d` copiar y ejecutar el script del proyecto pegando en la consola los siguientes comandos de forma individual: `docker cp script-inmoitt.sql contenedor-db:/script-inmoitt.cql`  entramos al contenedor desde la consola y escribimos el comando `cqlsh --file '/script-inmoitt.cql'`
## Pasos a seguir para probar este codigo para produccion
```
docker compose build --no-cache
docker compose up --build
```
## Pasos para desarrollar en este proyecto usando contenedores como punto de desarrollo
- Haber hecho "build" y "up" del compose
- En caso de que el volumen "inmoitt-data" sea nuevo hacer los pasos de *PRIMORDIAL*
- Tener instalado la extension [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Dar click en el icono >< que aparece en la parte inferior izquierda
- Seguido a lo anterior darle a "open in container"

## Pasos para desarrollar en este proyecto usando el mismo equipo de trabajo
- Tener instalado NODEJS
- levantar un contenedor de cassandra con el puerto '9042' publicado mendiante el siguiente comando `docker run -d --name cassandra -v inmoitt-data:/var/lib/cassandra -p 9042:9042 cassandra:4.0.6`
- En caso de que el volumen "inmoitt-data" sea nuevo hacer los pasos de *PRIMORDIAL*
- Ajustar las rutas con localhost en vez del dns que otorga DOCKER