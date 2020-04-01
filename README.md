# cinema_reservation_system
Iniciar aplicacion

`sudo apt install docker-compose`

`git clone git@github.com:vlaguzman/cinema_reservation.git`

`sudo docker-compose build`

`sudo docker-compose run web /bin/bash`

`dcbundle`

`yarn install --check-files` (or sudo docker-compose run web yarn install --check-files)

`bin/rails db:create`

`bin/rails db:migrate`

`sudo docker-compose up`

estilos: app/assets/stylesheets/*

controladores: app/controllers/*

vistas: app/views/*

modelos: app/models/*

pruebas: spec/*

librerias: lib/*

Alias: alias run-compose='sudo docker-compose' alias run-any='run-compose run web' alias dcbundle="run-any bundle"
