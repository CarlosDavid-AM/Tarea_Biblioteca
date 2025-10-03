# Tarea de Biblioteca

1.  Clonar el repositorio

Clone el repositorio con el siguiente comando:

```
git clone https://github.com/CarlosDavid-AM/Tarea_Biblioteca.git
```

```
Visitar el repositorio en: https://github.com/CarlosDavid-AM/Tarea_Biblioteca
```

2.  Restaurar la Base de Datos

```SQL
create database biblioteca;

use biblioteca;

create table libros
(
	id				int auto_increment 		primary key,
    titulo			varchar(50)				not null,
    autor			varchar(50)				not null,
    numpaginas		tinyint					not null,
    categoria		varchar(20)				not null
)engine = INNODB;

INSERT INTO libros(titulo, autor, numpaginas, categoria)
values
('Beginning Scala 3', 'Andres Sacco', '99', 'Java Language'),
('Practical Spring LDAP', 'Andres Sacco', '99', 'Java Language');
```

3. Abrir el proyecto _BIBLIOTECA_ en VSCode

4. Abrir la terminar **CTRL + Ñ** escribir

```
npm install
```

Se ejecutara la instalación de todas las dependencias definidas en **package.json**

5. Crear e ingresar los parametros en el archivo **env.**

6. Ejecurar el servidor

```
npm run dev
```

7. Verificar cada verbo (GET / POST / PUT / DELETE) usando PostMan o ThunderClient
