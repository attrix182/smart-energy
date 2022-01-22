# SmartEnergy


Aplicacion web desarrollada para correr en una raspberry pi, con el objetivo de sincronizarse con varios modulos node mcu (esp 8266) para automatizar luces, y demas electronicos (en proceseo)

Primer solucion planteada:
![interface](https://user-images.githubusercontent.com/44885834/140168911-a87ab4bd-7316-428d-bc81-931f6ccac5fc.jpg)

La idea es desarrollar una aplicacion web en la cual se puedan añadir distintos NodeMCU conectadados a la red wifi previamente.
Para esto es necesario conocer su ip, y poder pegarles desde esta aplicacion web, para cambiar un estado booleano almacenado en una variable, lo que se traduciria a encendido/apagado

# Primer iteracion

![Captura de pantalla 2021-11-03 165324](https://user-images.githubusercontent.com/44885834/140182994-d53f3e0a-61c1-41a4-b901-1e27abfc9883.jpg)
Interfaz de Dashboard de dispostivos con acciones de encendido y apagado


# Segunda iteracion
Investigando cambie el enfoque del proyecto!!.
En lugar de hacer que cada NodeMcu haga un servidor web y hacer peticiones a cada uno individualmente. (lo cual no era escalable ni practico)
Lo que hice fue utilizar Firebase, ya que los NodeMcu tienen la capacidad de conectarse a la red y consultar en tiempo real valores almacenados en Firebase.

Cree en Firebase Real Time, cada uno de los dispositivos y una variable de estado, la cual modifico desde la web app.
Y mediante una biblioteca cada NodeMcu consulta su estado en Firebase

![Captura de pantalla 2021-11-06 21![Captura de pantalla 2021-11-07 120436](https://user-images.githubusercontent.com/44885834/140650560-1546cb29-d064-414c-8e3e-0fc40b87f644.jpg)
1646](https://user-images.githubusercontent.com/44885834/140627759-92f48fc4-9fe6-41f7-b3ad-4242c9844452.jpg)

Tambien cambie un poco el diseño (Ahora modo oscuro) y el alta solo requiere nombre, la ip ya no se utiliza
![Captura de pantalla 2021-11-06 211624](https://user-images.githubusercontent.com/44885834/140627766-49fd11cb-6c71-4012-ba4b-1fd5bb1342f4.jpg)
![35250e4b-116b-43c8-a6ab-a571adc0751d](https://user-images.githubusercontent.com/44885834/140627770-0b84779f-8478-44ac-97d3-43c58c529529.jpg)

Ahora lo mas complicado es ordenar el Hardware y diseñar una carcasa compacta y funcional.
