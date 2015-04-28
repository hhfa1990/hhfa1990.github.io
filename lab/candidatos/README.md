# Candidatos

## Acerca del proyecto
El objetivo de este proyecto es dar a los ciudadanos una herramienta para que pueda colaborar e informarse con otros sobre los candidatos a puestos publicos de su ciudad a los que pagaremos con nuestros impuestos.

## Requerimientos
El proyecto se hizo de tal manera que no es necesaria una base de datos o un servidor web con muchos requerimientos, solo se necesita que pueda leer archivos estáticos **HTML, JS, Y CSS** por lo tanto puede ser subido a github, dropbox u otros servicios de host gratuitos.

También es necesario un medio de colaboración, para que los usuarios compartan la información que se presentara en el sitio, se recomienda **google docs** pero se puede usar cualquier otro medio.

## Editar
Para modificar el proyecto solo es necesario editar un par de archivos y agregar las imágenes de los candidatos:

### index.html

```html
<title>Candidatos Reynosa</title> <!-- EDITAR TITULO -->
```
```html
<h1>Candidatos Reynosa</h1> <!-- EDITAR NOMBRE-->
```

En esta parte es donde se agregara la información de los candidatos:
```html
<div id="candidatos">
	<ul><!-- EDITAR -->
        <li id="pan"></li>
        <li id="pri"></li>
        <li id="prd"></li>
        <li id="pt"></li>
        <li id="verde"></li>
        <li id="movCiud"></li>
        <li id="nuevAli"></li>
        <li id="morena"></li>
        <li id="humanista"></li>
        <li id="encSocial"></li>
        <!-- AGREGAR UN LI POR CADA CANDIDATO Y UN ID PARA IDENTIFICAR SUS DATOS -->
            <!--EJEMPLO: <li id="XXX"></li> y agergar los datos en scripts.js con el mismo id-->
	</ul>
</div>
```
Por ejemplo, digamos que tenemos tres candidatos, (candidato patito 1, candidator jarkor 2, candidato sayayin 3), entonces el código quedará de la siguiente forma:
```html
<div id="candidatos">
	<ul>
        <li id="patito1"></li>
        <li id="jarkor2"></li>
        <li id="sayayin3"></li>
	</ul>
</div>
```
Los nombres de los IDs puedes ser los que sean, solo es necesario que sea único ya que estos id se necesitaran para asignar los datos de cada candidato así como el nombre de su imagen.


### js/scripts.js
La variable **sinInfo**  es la que se usara en caso de que un campo de la información del candidato aun no cuente con datos, esta variable acepta html por lo que hay que tener cuidado en caso de necesitar comillas dentro de ella, es preferible utilizar comillas simples.

Si se quiere dejar ese mensaje solo es necesario **editar la url** del medio de comunicación por la propia, por lo que hay que cambiar [https://docs.google.com/document/d/1XONLZYuxv8I5n8bDeVbyUA2zeukzktG77WJURljjWAM/edit](https://docs.google.com/document/d/1XONLZYuxv8I5n8bDeVbyUA2zeukzktG77WJURljjWAM/edit) por la url propia:
```javascript
// MENSAJE PARA MOSTRAR SI NO SE CUENTA CON INFORMACION
	var sinInfo = "<p>Sin información</p><p>Se necesita un poco de tu <strong>Ki</strong> \\o/, por favor colabora <a href='https://docs.google.com/document/d/1XONLZYuxv8I5n8bDeVbyUA2zeukzktG77WJURljjWAM/edit' target='_blank'>aquí</a></p>";
```
De acuerdo a los id (patito1, jarkor2, sayayin3), los datos quedarían de la siguiente manera:
```javascript
//INFORMACION DE LOS CANDIDATOS
	var candidatos = {
		patito1:{//Aqui debe de ir el id del candidato
          nombre: "NOMBRE DEL CANDIDATO", //nombre del candidato (texto plano)
          infoPersonal: "datos HTML",
          propuestas: "datos HTML",
          antecedentes: "datos HTML",
          fuentes: "datos HTML"
		},
        jarkor2:{//Aqui debe de ir el id del candidato
          nombre: "NOMBRE DEL CANDIDATO", 
          infoPersonal: "datos HTML",
          propuestas: "datos HTML",
          antecedentes: "datos HTML",
          fuentes: "datos HTML"
		},
        sayayin3:{
          nombre: "NOMBRE DEL CANDIDATO", 
          infoPersonal: "datos HTML",
          propuestas: "datos HTML",
          antecedentes: "datos HTML",
          fuentes: "datos HTML"
		}
	};
```
Todos los campos a excepción del de nombre tomara el html tal cual, se recomienda utilizar solamente los básicos como: **p, strong, ul, li y a** para mantener el mismo formato.

### img/
Las imagenes deben de ir dentro del directorio img/. El formato puede ser png o jpg y debe de ser de forma cuadrada y no mayor a 300 x 300 pixeles. Es una imagen por candidato y cada una debe de llamarse como el id asignado a cada candidato.

Ejemplo:
```
	img/patito1.png
	img/jarkor2.png
    img/sayayin3.png
```
### css/style.css
Ya solo quedaria editar el estilo y agregarle su imagen de fondo editando el style.css (al final del archivo):
```css
  /*EDITAR IMAGENES DE LOS CANDIDATOS*/
  li#patito1 {background-image: url(../img/patito1.png);}
  li#jarkor2 {background-image: url(../img/jarkor2.png);}
  li#sayayin3 {background-image: url(../img/sayayin3.png);}
```

## Acerca
Developed with :heart: by Heddie H. Franco

Colabora o el pollito se muere: :hatching_chick::gun:

:envelope: [hhfa1990@gmail.com](mailto:hhfa1990@gmail.com)
