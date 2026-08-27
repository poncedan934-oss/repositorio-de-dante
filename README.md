# repositorio-de-dante
Antes de instalar el proyecto es necesario contar con:

Node.js compatible con la versión indicada en .nvmrc.
npm, incluido normalmente con Node.js.
Git, si el proyecto se obtiene desde un repositorio.
Visual Studio Code u otro editor compatible con TypeScript.

la instalación consta de:
1. clonar el proyecto
git clone mysql://usuario:clave@localhost/turnos

e ingresar a la carpeta:

cd turnos-red

2. instalar las dependencias con npm install esto instalará las dependencias definidas en package.json y utilizará package-lock.json para mantener versiones consistentes.

3. configurar las variables de entorno creando un archivo .env en la raíz del proyecto.

Ejemplo:

PORT=3000
DATA_FILE=./data/turnos.json

También se proporciona .env.example como referencia

4. verificar el archivo de datos
La estructura esperada es:

data/
└── turnos.json

Un ejemplo mínimo:

[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "fecha": "2026-08-24",
    "hora": "10:00"
  }
]

5. ejecutar el proyecto 

para ejecutar la aplicación en modo desarrollo:

npm run dev

Para compilar TypeScript:

npm run build

Y posteriormente ejecutar la versión compilada:

npm start

VARIABLES DE ENTORNO
Las variables de configuración se almacenan en .env.

variable             descripción             valor de ejemplo               obligatoria

port           Puerto donde se ejecuta el      3000                          no
               servidor HTTP/WebSocket

DATA_FILE      Ruta del archivo JSON 
              utilizado para almacenar       ./data/turnos.json              no 
              los turnos                   

si una variable no está definida, la aplicación puede utilizar valores predeterminados.

Ejemplo:

PORT=3000
DATA_FILE=./data/turnos.json

Importante: el archivo .env no debe incluirse en el repositorio. Debe estar incluido en .gitignore.

Para facilitar la configuración de nuevos entornos se incluye:



.env.example

Ejemplo:

PORT=3000
DATA_FILE=./data/turnos.json

SCRIPTS DISPONIBLES	
Los comandos disponibles se encuentran definidos en package.json.

Script	Comando	Descripción
dev	npm run dev	Ejecuta la aplicación en modo desarrollo
build	npm run build	Compila el código TypeScript
start	npm start	Ejecuta la aplicación compilada
lint	npm run lint	Analiza el código con ESLint
lint:fix	npm run lint:fix	Corrige automáticamente problemas detectables por ESLint
format	npm run format	Formatea el código utilizando Prettier
format:check	npm run format:check	Comprueba si el código cumple con Prettier
fix	npm run fix	Ejecuta ESLint con correcciones y posteriormente Prettier
check	npm run check	Ejecuta las comprobaciones de calidad sin modificar los archivos



la estructura principal es:
turnos-red/
│
├── .env
├── .env.example
├── .gitignore
├── .nvmrc
├── package.json
├── package-lock.json
├── tsconfig.json
├── cliente.html
│── turnos.json
│
└── src/
    │
    ├── server.ts
    │
    ├── routes/
    │
    ├── controllers/
    │   └── turnos.controller.js
    │
    ├── services/
    │   ├── turnos.json
    │   └── eventBus.ts
    │
    ├── models/
    │   ├── turno.ts
    │
    └── websocket/
        └── websocket.ts
        └── eventos.ts
