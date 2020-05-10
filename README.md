# Ejemplo de despliegue de aplicaciones con GitHub Actions
Este repositorio está configurado para desplegarse en AWS ElasticBeanstalk y Azure Web Apps mediante GitHub Actions.

Videotutoriales:
- [[https://youtu.be/gcWCoqO9PnQ][Despliegue en Azure]]
- [[https://youtu.be/AtAwxn_yMeE][Despliegue en AWS]]

## Instalación de Node
Disponible en https://nodejs.org/es/

## Instalación
```
npm install
```

## Ejecución de tests
```
npm test
```

## Ejecución de la aplicación en local
```
npm start
```
La app estará disponible en `http://localhost:3000`

## Instrucciones de despliegue
1. Hacer un `fork` del repositorio
2. Crear la aplicación en AWS ElasticBeanstalk
3. Crear la aplicación en Azure Web Apps
4. Configurar los datos de las aplicaciones en los ficheros correspondientes de la carpeta `.github/workflows`
5. Crear las variables necesarias en los ajustes del repositorio (`Settings`/`Secrets`):
  - AWS:
    - `AWS_ACCESS_KEY_ID`
    - `AWS_ACCESS_ACCESS_KEY`
  - Azure
    - Configurar la variable de perfil
6. Subir un nuevo cambio al repositorio
7. Opcionalmente: crear un test que falle y comprobar que no se realiza el despliegue.
