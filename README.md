# Servidor de Swagger en expres con multiples archivos yaml para manejar distintas versiones

## Requisitos
 - Node js
 - paquetes de npm:
     - express
     - swagger-express-mw

## Estructura de proyecto recomendada
```
.
├───index.js
├───package.json
├───api
|   ├───configuration/
|   │   ├───api_v1.js
|   │   └───api_v2.js
|   ├───controllers/
|   │   ├───bye_controller_v1.js
|   │   ├───hello_controller_v1.js
|   │   └───hello_controller_v2.js
|   ├───swagger/
|   │   └───v1/
|   |   │   ├───hello_v1.yaml
│   │   └───bye_v1.yaml
│   |   └───v2/
│   |       └───hello_v2.yaml
```