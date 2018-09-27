# exampleAngular2

    En este ejemplo veremos una aplicación sencilla en NativeScript y Angular 2.



Comandos más utilies para la creación y desarrollo de aplicaciones en NativeScript:

    tns create NombreProyecto

    Con este comando crearemos un proyecto nuevo de {N}, para conocer más opciones de este comando y su uso 
visitar la web https://github.com/NativeScript/NativeScript/wiki/Using-the-%60tns-create%60-command.


    tns run android/ios

    Al ejecutar este comando dentro de la raíz de nuestro proyecto con la plataforma que queramos usar se cargará
en dicho dispositivo, simulador o emulador que tengamos sincronizado.

    tns platform remove android/ios

    Eliminamos la carpeta platform de la plataforma que le pasemos.

    tns platform add android/ios

    Se creará una carpeta de la plataforma que le pasemos con la app compilada para su ejecución en un dispositivo en la carpeta de platform

    tns prepare android/ios

    Instala todas las dependencias que necesitemos y tengamos en el package.json

    tns build android/ios

    Construye y prepara la aplicación para su ejecución.