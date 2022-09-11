# API INMOITTAPI

## PRIMORDIAL
Ejecutar el modelo de la base de datos que viene en el proyecto usando alguna herramienta como "Mysql WorkBench" y crear previamente el volumen "mysql-data" usando el comando `docker volume create mysql-data`

## Pasos a seguir para probar este codigo para produccion
`
docker compose build --no-cache
`
`
docker compose up --build
`
## Pasos para desarrollar en este proyecto
- Haber hecho "build" y "up" del compose
- Tener instalado la extension [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Dar click en el icono >< que aparece en la parte inferior izquierda
- Seguido a lo anterior darle a "open in container"
