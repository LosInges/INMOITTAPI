DROP KEYSPACE INMOITT;
CREATE KEYSPACE INMOITT WITH REPLICATION={'class':'SimpleStrategy', 'replication_factor':1};
USE INMOITT;

/*TIPOS DE DATOS*/
CREATE TYPE notario(
nombre VARCHAR,
apellido VARCHAR,
correo VARCHAR,
foto VARCHAR
);

CREATE TYPE direccion(
calle VARCHAR,
codigoPostal VARCHAR,
colonia VARCHAR,
numeroExterior INT,
numeroInterior INT,
estado VARCHAR
);
/**************************************************/
/*TABLA DE CUENTAS */
DROP TABLE CUENTAS;
CREATE TABLE CUENTAS(
CORREO VARCHAR PRIMARY KEY,
PASSWORD VARCHAR,
TIPO VARCHAR,
EMPRESA VARCHAR
);
/**************************************************/
/*TABLAS DE FLETES*/
DROP TABLE PAQUETES;
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

DROP TABLE CARGADORES;
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

DROP TABLE TRANSPORTES;
CREATE TABLE TRANSPORTES(
EMPRESA VARCHAR,
MATRICULA VARCHAR,
CAPACIDAD DECIMAL,
ACTIVO BOOLEAN,
PRIMARY KEY(EMPRESA, MATRICULA)
)WITH COMMENT='C6, F2';

DROP TABLE EMPRESAS_FLETES;
CREATE TABLE EMPRESAS_FLETES(
CORREO VARCHAR,
NOMBRE VARCHAR,
PASSWORD VARCHAR,
TELEFONO VARCHAR,
ESTADOS LIST<VARCHAR>,
PRIMARY KEY (CORREO)
);

DROP TABLE FLETES;
DROP TABLE FLETES_CLIENTE;
DROP TABLE FLETES_EMPRESA;
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

USE INMOITT;
DROP TABLE TRANSPORTE_FLETE;
CREATE TABLE TRANSPORTE_FLETE(
FLETE VARCHAR,
TRANSPORTE VARCHAR,
PAQUETE LIST<VARCHAR>,
CARGADORES LIST<VARCHAR>,
PRIMARY KEY (FLETE, TRANSPORTE)
);

DROP TABLE PRECARGA;
CREATE TABLE PRECARGA(
ID VARCHAR,
EMPRESA VARCHAR,
CLIENTE VARCHAR,
MUEBLES INT,
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
/*************************************************/
/*TABLAS SOBRE INMOBILIARIAS*/
DROP TABLE INMOBILIARIAS;
CREATE TABLE INMOBILIARIAS(
NOMBRE VARCHAR,
DIRECCION FROZEN<DIRECCION>,
ESTADO VARCHAR,
NOTARIOS LIST<FROZEN<NOTARIO>>,
AGENTES LIST<VARCHAR>,
CORREO VARCHAR,
PASSWORD VARCHAR,
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
DROP TABLE INMUEBLES;
CREATE TABLE INMUEBLES(
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
NOTARIO FROZEN<NOTARIO>,
AGENTE VARCHAR,
VISIBLE BOOLEAN,
BORRADO BOOLEAN,
PRIMARY KEY (TITULO, ESTADO)
)WITH COMMENT='C2, C3, C5, I1, I2';

CREATE TABLE INMUEBLES_INMOBILIARIA(
INMOBILIARIA VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
METROS_CUADRADOS DECIMAL,
PRIMARY KEY (INMOBILIARIA, ESTADO, TITULO)
)WITH COMMENT='I1';

CREATE TABLE INMUEBLES_CLIENTE(
CLIENTE VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
METROS_CUADRADOS DECIMAL,
ACREDITADO BOOLEAN,
PRIMARY KEY (CLIENTE, ESTADO, TITULO)
)WITH COMMENT='C9';

/**/
CREATE TABLE AGENTES(
RFC VARCHAR PRIMARY KEY,
NOMBRE VARCHAR,
APELLIDO VARCHAR,
PASSWORD VARCHAR,
TELEFONO VARCHAR,
CORREO VARCHAR
)

USE INMOITT;
DROP TABLE AGENTE_INMOBILIARIA;
CREATE TABLE AGENTE_INMOBILIARIA(
RFC VARCHAR,
INMOBILIARIA VARCHAR,
NOMBRE VARCHAR,
APELLIDO VARCHAR,
FOTO VARCHAR,
CORREO VARCHAR,
PASSWORD VARCHAR,
PRIMARY KEY(INMOBILIARIA, RFC)
)WITH COMMENT='I3';


CREATE TABLE INMUEBLES_AGENTE(
AGENTE VARCHAR,
TITULO VARCHAR,
ESTADO VARCHAR,
FOTO VARCHAR,
DIRECCION FROZEN<DIRECCION>,
PRECIO_RENTA DECIMAL,
PRECIO_VENTA DECIMAL,
METROS_CUADRADOS DECIMAL,
PRIMARY KEY (AGENTE, ESTADO, TITULO)
)WITH COMMENT='C9';

CREATE TABLE SERVICIO(
NOMBRE VARCHAR PRIMARY KEY 
)