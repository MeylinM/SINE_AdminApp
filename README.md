# SINE AdminApp

Aplicación móvil de administración desarrollada en **React Native** para el sistema SINE.  
Esta app permite a los usuarios internos gestionar y supervisar la información relacionada con las bobinas de madera, incluyendo su ubicación, estado y historial.  
Desarrollada por **MeylinM** durante su periodo de prácticas en la empresa **HodeiCloud**, cumpliendo con los requerimientos del cliente.

**GitHub:** [https://github.com/MeylinM/](https://github.com/MeylinM/)

---

## ⚙️ Configuración necesaria

> Este proyecto requiere un archivo de configuración ubicado en la carpeta `config/`, el cual **no** está incluido en el repositorio por motivos de seguridad.  
> Debes crearlo manualmente si no está presente.

### 📄 1. Crear archivo `config.js`

Dentro de la carpeta `config/`, crea un archivo llamado:

```
config.js
```

Y añade la siguiente estructura:

```js
export const ALMACEN_URL = ""; //URL para obtener todos los almacenes
export const EMPLEADO_URL = ""; //URL para obtener todos los empleados
export const PRODUCTO_URL = ""; //URL para obtener el historial de todas las bobinas
export const USUARIO_PRODUCTO_URL =""; //URL para btener empleados que se encargaron de las bobinas
```

> Sustituye cada valor por tus credenciales reales.

---

## 🚀 Instalación y ejecución

1. Clona este repositorio:

```bash
git clone https://github.com/MeylinM/SINE_AdminApp.git
cd SINE_AdminApp
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta la aplicación:

```bash
npm start
```

> Asegúrate de tener configurado el entorno de desarrollo para React Native (Android Studio, Xcode, emuladores o dispositivos físicos).

---

## 📂 Estructura del proyecto

```
SINE_AdminApp/
├── assets/               # Recursos estáticos como imágenes y fuentes
├── components/           # Componentes reutilizables de la interfaz
├── config/               # Archivo de configuración API
├── manual/               # Documentación y manuales de uso
├── model/                # Modelos de datos utilizados en la app
├── screens/              # Pantallas principales de la aplicación
├── services/             # Servicios para interactuar con la API
├── styles/               # Estilos globales y específicos
├── utils/                # Funciones utilitarias y helpers
├── App.js                # Punto de entrada de la aplicación
├── app.json              # Configuración de la app para Expo
├── index.js              # Archivo principal de arranque
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
```

---

## 🔗 Repositorios relacionados

- **Servidor backend (SINE_Server):**  
  👉 [https://github.com/JulenHidalgo/sine-server](https://github.com/JulenHidalgo/sine-server)

- **Aplicación cliente (SINE_APP):**  
  👉 [https://github.com/MeylinM/SINE_APP](https://github.com/MeylinM/SINE_APP)

---

## 🛡️ Seguridad

- El archivo `config.js` no debe contener credenciales sensibles en producción.
- Asegúrate de excluirlo del control de versiones si se incluyen datos privados.
