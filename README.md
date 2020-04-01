# cinema_reservation_system
La aplicación usa Docker por tanto para iniciar aplicación es necesario seguir los siguientes pasos:

1. Clonar el repositorio del proyecto:
`git clone git@github.com:vlaguzman/cinema_reservation_system.git`

2. Istalar Docker:
```
sudo apt update sudo apt install apt-transport-https ca-certificates curl software-properties-common curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic test" sudo apt update sudo apt install docker-ce
```
`sudo apt install docker-compose`
3. Construir la imagen de docker
`sudo docker-compose build`
4. Entrar al bash para realizar la instalación de las gemas y revisar actualizaciones del yarn
`run-bash`
`bundle`
`yarn install --check-files` (or sudo docker-compose run web yarn install --check-files)

5. Podemos salir del modo bash y ejecutamos los siguientes comandos para crear y migrar la base de datos:
exit of bash mode 

`dcdbcreate`
`dcdbmigrate`

6. Ponemos a correr la aplicación
`sudo docker-compose up`

#Arquitectura del proyecto
estilos: app/assets/stylesheets/*

controladores: app/controllers/*

vistas: app/views/*

modelos: app/models/*

pruebas: spec/*

librerias: lib/*

#Alias usados en la guía: 
```
alias dc='sudo docker-compose'
alias run-web='dc run web'
alias run-bash='run-web /bin/bash'
alias dcdbcreate="run-web bin/rails db:create"
alias dcdbdrop="run-web bin/rails db:drop"

