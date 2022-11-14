DROP KEYSPACE INMOITT;
CREATE KEYSPACE INMOITT WITH REPLICATION={'class':'SimpleStrategy', 'replication_factor':1};
USE INMOITT;

/*TIPOS DE DATOS*/
CREATE TYPE direccion(
calle VARCHAR,
codigoPostal VARCHAR,
colonia VARCHAR,
numeroExterior INT,
numeroInterior INT,
estado VARCHAR
);

CREATE TYPE MUEBLE(
NOMBRE VARCHAR,
CANTIDAD INT
);
/**************************************************/
/*TABLA DE CUENTAS */
CREATE TABLE CUENTAS(
CORREO VARCHAR PRIMARY KEY,
PASSWORD VARCHAR,
TIPO VARCHAR,
EMPRESA VARCHAR
);
/**************************************************/
/*TABLAS DE FLETES*/
CREATE TABLE PAQUETES(
ID VARCHAR,
ID_ITEM VARCHAR,
ITEM VARCHAR,
ALTO_ITEM DECIMAL,
ANCHO_ITEM DECIMAL,
FOTO VARCHAR,
TOTAL DECIMAL STATIC,
PRIMARY KEY(ID, ID_ITEM)
)WITH COMMENT='C5, F1';

CREATE TABLE CARGADORES(
EMPRESA VARCHAR,
RFC VARCHAR,
NOMBRE VARCHAR,
APELLIDO VARCHAR,
PASSWORD VARCHAR,
TELEFONO VARCHAR,
FOTO VARCHAR,
PRIMARY KEY(EMPRESA, RFC)
)WITH COMMENT='C7, F3';

CREATE TABLE TRANSPORTES(
EMPRESA VARCHAR,
MATRICULA VARCHAR,
CAPACIDAD DECIMAL,
ACTIVO BOOLEAN,
PRIMARY KEY(EMPRESA, MATRICULA)
)WITH COMMENT='C6, F2';

CREATE TABLE EMPRESAS_FLETES(
CORREO VARCHAR,
NOMBRE VARCHAR,
PASSWORD VARCHAR,
TELEFONO VARCHAR,
ESTADOS LIST<VARCHAR>,
LOGO VARCHAR,
PRIMARY KEY (CORREO)
);

CREATE TABLE FLETES(
ACTIVO BOOLEAN,
ID VARCHAR,
EMPRESA VARCHAR,
CLIENTE VARCHAR,
ORIGEN FROZEN<DIRECCION>,
DESTINO FROZEN<DIRECCION>,
TELEFONO VARCHAR,
FECHA DATE,
HORA TIME,
PRIMARY KEY ((ACTIVO, ID), EMPRESA, CLIENTE)
);

CREATE TABLE FLETES_CLIENTE(
ACTIVO BOOLEAN,
ID VARCHAR,
EMPRESA VARCHAR,
CLIENTE VARCHAR,
ORIGEN FROZEN<DIRECCION>,
DESTINO FROZEN<DIRECCION>,
TELEFONO VARCHAR,
FECHA DATE,
HORA TIME,
PRIMARY KEY ((ACTIVO, CLIENTE), EMPRESA, ID)
);

CREATE TABLE FLETES_EMPRESA(
ACTIVO BOOLEAN,
ID VARCHAR,
EMPRESA VARCHAR,
CLIENTE VARCHAR,
ORIGEN FROZEN<DIRECCION>,
DESTINO FROZEN<DIRECCION>,
TELEFONO VARCHAR,
FECHA DATE,
HORA TIME,
PRIMARY KEY ((ACTIVO, EMPRESA), ID, CLIENTE)
);

CREATE TABLE TRANSPORTE_FLETE(
FLETE VARCHAR,
TRANSPORTE VARCHAR,
PAQUETE LIST<VARCHAR>,
CARGADORES LIST<VARCHAR>,
PRIMARY KEY (FLETE, TRANSPORTE)
);

CREATE TABLE PRECARGA(
ID VARCHAR,
EMPRESA VARCHAR,
CLIENTE VARCHAR,
MUEBLES LIST<FROZEN<MUEBLE>>,
CAJAS_CHICAS INT,
CAJAS_GRANDES INT,
CAJAS_MEDIANAS INT,
ORIGEN FROZEN<DIRECCION>,
DESTINO FROZEN<DIRECCION>,
FECHA DATE,
HORA TIME,
TELEFONO VARCHAR,
PRIMARY KEY(EMPRESA, ID)
);

CREATE TABLE PRECARGA_CLIENTE(
ID VARCHAR,
EMPRESA VARCHAR,
CLIENTE VARCHAR,
MUEBLES LIST<FROZEN<MUEBLE>>,
CAJAS_CHICAS INT,
CAJAS_GRANDES INT,
CAJAS_MEDIANAS INT,
ORIGEN FROZEN<DIRECCION>,
DESTINO FROZEN<DIRECCION>,
FECHA DATE,
HORA TIME,
TELEFONO VARCHAR,
PRIMARY KEY(CLIENTE, ID)
);
/*************************************************/
/*TABLAS SOBRE INMOBILIARIAS*/
USE inmoitt;
CREATE TABLE INMOBILIARIAS(
NOMBRE VARCHAR,
DIRECCION FROZEN<DIRECCION>,
ESTADO VARCHAR,
SEDES LIST<VARCHAR>,
CORREO VARCHAR,
PASSWORD VARCHAR,
FOTO VARCHAR,
PRIMARY KEY(CORREO, ESTADO, NOMBRE)
)WITH COMMENT='C1';

CREATE TABLE CLIENTE_INMOBILIARIA(
CORREO VARCHAR,
INMOBILIARIA VARCHAR,
NOMBRE VARCHAR,
APELLIDO VARCHAR,
FOTO VARCHAR,
PRIMARY KEY(INMOBILIARIA, CORREO)
)WITH COMMENT='I3';
/***************************************************/
/*TABLAS SOBRE EL CLIENTE*/
CREATE TABLE CLIENTES(
CORREO VARCHAR,
PASSWORD VARCHAR,
NOMBRE VARCHAR,
APELLIDO VARCHAR,
PRIMARY KEY(CORREO, NOMBRE, APELLIDO)
)WITH COMMENT='C8';
/*************************************************************/
/*TABLAS DE INMUEBLES*/
use inmoitt;
CREATE TABLE PROYECTOS(
INMOBILIARIA VARCHAR,
NOMBRE VARCHAR,
CIUDAD VARCHAR,
INICIO VARCHAR,
PRIMARY KEY (INMOBILIARIA, NOMBRE)
);
CREATE TABLE INMUEBLES(
INMOBILIARIA VARCHAR,
PROYECTO VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
CUARTOS SMALLINT,
PISOS SMALLINT,
METROS_CUADRADOS DECIMAL,
DESCRIPCION VARCHAR,
SERVICIOS SET<VARCHAR>,
NOTARIO VARCHAR,
AGENTE VARCHAR,
VISIBLE BOOLEAN,
BORRADO BOOLEAN,
PRIMARY KEY (INMOBILIARIA, PROYECTO, TITULO)
)WITH COMMENT='C2, C3, C5, I1, I2';

CREATE TABLE INMUEBLES_CLIENTE(
CLIENTE VARCHAR,
INMOBILIARIA VARCHAR,
PROYECTO VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
CUARTOS SMALLINT,
PISOS SMALLINT,
METROS_CUADRADOS DECIMAL,
DESCRIPCION VARCHAR,
SERVICIOS SET<VARCHAR>,
NOTARIO VARCHAR,
AGENTE VARCHAR,
VISIBLE BOOLEAN,
BORRADO BOOLEAN,
PRIMARY KEY (CLIENTE, INMOBILIARIA, PROYECTO, TITULO)
)WITH COMMENT='C9';

CREATE TABLE INMUEBLES_CLIENTE_INMOBILIARIA(
CLIENTE VARCHAR,
INMOBILIARIA VARCHAR,
PROYECTO VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
CUARTOS SMALLINT,
PISOS SMALLINT,
METROS_CUADRADOS DECIMAL,
DESCRIPCION VARCHAR,
SERVICIOS SET<VARCHAR>,
NOTARIO VARCHAR,
AGENTE VARCHAR,
VISIBLE BOOLEAN,
BORRADO BOOLEAN,
PRIMARY KEY (INMOBILIARIA, PROYECTO, TITULO, CLIENTE)
)WITH COMMENT='C9';

CREATE TABLE INMUEBLES_AGENTE(
INMOBILIARIA VARCHAR,
PROYECTO VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
CUARTOS SMALLINT,
PISOS SMALLINT,
METROS_CUADRADOS DECIMAL,
DESCRIPCION VARCHAR,
SERVICIOS SET<VARCHAR>,
NOTARIO VARCHAR,
AGENTE VARCHAR,
VISIBLE BOOLEAN,
BORRADO BOOLEAN,
PRIMARY KEY (AGENTE, INMOBILIARIA, PROYECTO, TITULO)
)WITH COMMENT='C9';

CREATE TABLE INMUEBLES_PROYECTO(
INMOBILIARIA VARCHAR,
PROYECTO VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
CUARTOS SMALLINT,
PISOS SMALLINT,
METROS_CUADRADOS DECIMAL,
DESCRIPCION VARCHAR,
SERVICIOS SET<VARCHAR>,
NOTARIO VARCHAR,
AGENTE VARCHAR STATIC,
VISIBLE BOOLEAN,
BORRADO BOOLEAN,
PRIMARY KEY (PROYECTO, INMOBILIARIA, TITULO)
)WITH COMMENT='C9';

CREATE TABLE INMUEBLES_NOTARIO(
INMOBILIARIA VARCHAR,
PROYECTO VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
CUARTOS SMALLINT,
PISOS SMALLINT,
METROS_CUADRADOS DECIMAL,
DESCRIPCION VARCHAR,
SERVICIOS SET<VARCHAR>,
NOTARIO VARCHAR,
AGENTE VARCHAR,
VISIBLE BOOLEAN,
BORRADO BOOLEAN,
PRIMARY KEY (NOTARIO, INMOBILIARIA, PROYECTO, TITULO)
)WITH COMMENT='C2, C3, C5, I1, I2';

/**/
CREATE TABLE AGENTE_INMOBILIARIA(
RFC VARCHAR,
INMOBILIARIA VARCHAR,
NOMBRE VARCHAR,
APELLIDO VARCHAR,
FOTO VARCHAR,
CORREO VARCHAR,
PASSWORD VARCHAR,
TELEFONO VARCHAR,
PRIMARY KEY(INMOBILIARIA, RFC)
)WITH COMMENT='I3';

CREATE TABLE SERVICIO(
NOMBRE VARCHAR PRIMARY KEY 
)

CREATE TABLE IMAGENES_INMUEBLE(
TITULO VARCHAR,
RUTA VARCHAR,
PRIMARY KEY(TITULO, RUTA)
);

CREATE TABLE notario(
INMOBILIARIA VARCHAR,
RFC VARCHAR,
nombre VARCHAR,
apellido VARCHAR,
correo VARCHAR,
foto VARCHAR,
PRIMARY KEY (INMOBILIARIA, RFC)
);