Te envío las versiones de software a instalar:
-Windows 10 (También se puede realizar con Mac Os o Linux, pero algunas configuraciones son distintas)
-Visual studio code 1.62.0
-node.js 14.18.1
-npm 6.14.15 (Esta versión ya viene instalada con la versión de node.js)
-postman 9.1.3. (Se debe de crear la cuenta de usuario gratuita de postman, así podremos crear un mock server privado y una api key)
-Microsoft Teams (si utilizais otro software para la formación me lo comentais).
-Para probar la instalación de react pueden ejecutar estos comandos:

npx create-react-app avanade-app
cd avanade-app
npm start

El hardware mínimo necesario:
-Microprocesador compatible o similar a i486
-8GB de Ram
-200MB de disco duro disponible
-Conexión a internet


INTRODUCCIÓN
• ¿Qué es React?
• Ventajas
• Arquitectura

INSTALACION
• Descarga
• Entorno de trabajo
• Flujo de trabajo

COMPONENTES
• ReactDOM
• JSX
• Estilos y propiedades
• Estados
• Ciclo de Vida
• Tests Unitarios con Jest

UI
• Listados
• Composición
• Modal
• Errores

FORMULARIOS
• Inputs
• Validación

SPA´S
• Rutas
• Manejo de estados
• Gestión del estado con Redux
• Redux Store & State
• Redux Action & Reducers

PRODUCCIÓN
• Despliegue
• Buenas prácticas
• Internacionalización



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1.Que es react
https://tech.tribalyte.eu/blog-que-es-react

npx create-react-app bonarea-react-app --template typescript
npx create-react-app avanade-react-app
https://create-react-app.dev/
Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly.

Airbnb React/Jsx Style Guide
https://github.com/airbnb/javascript/tree/master/react

https://medium.com/swlh/need-a-local-static-server-here-are-several-options-bbbe77e59a11

Web Server for Chrome
https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en

package.json dependencias
En términos más sencillos, la senoidal coincide con la versión menor más reciente (el número central). ~1.2.3 coincidirá con todas las versiones 1.2.x pero pero se perderá la 1.3.0. 
 

El caret (acento circunflejo), en cambio, es más relajado. Te actualizará a la versión principal más reciente (el primer número). ^1.2.3 coincidirá con con cualquier versión 1.x.x, incluida la 1.3.0, pero no con la 2.0.0.

Fuente: https://www.iteramos.com/pregunta/9987/diferencia-entre-tilde--y-acento-circunflejo--en-packagejson

1.Estructura de proyecto react
https://javadesde0.com/analizando-al-estructura-de-un-proyecto-de-reactjs/

0.2%: All browsers that have at least 0,2% of global market share
not dead: Exclude browsers without official support in the last 24 months
not ie <= 11: Exclude IE 11 and older versions
not op_mini all: Exclude Opera Mini


Estructura de carpetas:
https://latteandcode.medium.com/reactjs-la-estructura-de-carpetas-con-la-que-me-siento-mas-comodo-2a8783ad6d45


-Create a Navegation Bar
npm install react-router-dom

-Create fluentui react components
npm i @fluentui/react 

-Install React Developer Tools:
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es

React Router Dom 6
https://dev.to/salehmubashar/react-router-dom-36a2

Manejar formularios con Formik y Yup
https://jperaza.medium.com/validar-formularios-con-formik-y-yup-en-react-703b5630cd35

npm install formik yup
npm install react-bootstrap bootstrap
npm install styled-components
npm install react-papaparse 