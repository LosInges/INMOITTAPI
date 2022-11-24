CREATE KEYSPACE inmoitt WITH replication = { 'class': 'SimpleStrategy',
'replication_factor': '1' };
CREATE TYPE inmoitt.direccion (lat decimal, lng decimal);
CREATE TYPE inmoitt.mueble (nombre text, cantidad int);
CREATE TABLE inmoitt.agente_inmobiliaria (
  inmobiliaria text,
  rfc text,
  apellido text,
  correo text,
  foto text,
  nombre text,
  password text,
  telefono text,
  PRIMARY KEY (inmobiliaria, rfc)
);
CREATE TABLE inmoitt.agentes_proyecto (
  nombre text,
  inmobiliaria text,
  agente text,
  PRIMARY KEY (nombre, inmobiliaria, agente)
);
CREATE TABLE inmoitt.cargadores (
  empresa text,
  rfc text,
  apellido text,
  foto text,
  nombre text,
  password text,
  telefono text,
  PRIMARY KEY (empresa, rfc)
);
CREATE TABLE inmoitt.cliente_inmobiliaria (
  inmobiliaria text,
  correo text,
  apellido text,
  foto text,
  nombre text,
  PRIMARY KEY (inmobiliaria, correo)
);
CREATE TABLE inmoitt.clientes (
  correo text PRIMARY KEY,
  apellido text,
  nombre text,
  password text
);
CREATE TABLE inmoitt.cuentas (
  correo text PRIMARY KEY,
  empresa text,
  password text,
  tipo text
);
CREATE TABLE inmoitt.empresas_fletes (
  correo text PRIMARY KEY,
  logo text,
  nombre text,
  password text,
  telefono text,
  estados list < text >
);
CREATE TABLE inmoitt.fletes (
  activo boolean,
  id text,
  empresa text,
  cliente text,
  destino frozen < direccion >,
  fecha date,
  hora time,
  origen frozen < direccion >,
  telefono text,
  PRIMARY KEY ((activo, id), empresa, cliente)
);
CREATE TABLE inmoitt.fletes_cliente (
  activo boolean,
  cliente text,
  empresa text,
  id text,
  destino frozen < direccion >,
  fecha date,
  hora time,
  origen frozen < direccion >,
  telefono text,
  PRIMARY KEY ((activo, cliente), empresa, id)
);
CREATE TABLE inmoitt.fletes_empresa (
  activo boolean,
  empresa text,
  id text,
  cliente text,
  destino frozen < direccion >,
  fecha date,
  hora time,
  origen frozen < direccion >,
  telefono text,
  PRIMARY KEY ((activo, empresa), id, cliente)
);
CREATE TABLE inmoitt.imagenes_inmueble (
  inmobiliaria text,
  proyecto text,
  titulo text,
  ruta text,
  PRIMARY KEY (inmobiliaria, proyecto, titulo, ruta)
);
CREATE TABLE inmoitt.inmobiliarias (
  correo text PRIMARY KEY,
  direccion frozen < direccion >,
  estado text,
  foto text,
  nombre text,
  password text,
  sedes list < text >
);
CREATE TABLE inmoitt.inmuebles (
  inmobiliaria text,
  proyecto text,
  titulo text,
  agente text,
  borrado boolean,
  cuartos smallint,
  descripcion text,
  direccion frozen < direccion >,
  estado text,
  foto text,
  metros_cuadrados decimal,
  notario text,
  pisos smallint,
  precio_renta decimal,
  precio_venta decimal,
  visible boolean,
  servicios
  set < text >,
    PRIMARY KEY (inmobiliaria, proyecto, titulo)
);
CREATE TABLE inmoitt.inmuebles_agente (
  agente text,
  inmobiliaria text,
  proyecto text,
  titulo text,
  borrado boolean,
  cuartos smallint,
  descripcion text,
  direccion frozen < direccion >,
  estado text,
  foto text,
  metros_cuadrados decimal,
  notario text,
  pisos smallint,
  precio_renta decimal,
  precio_venta decimal,
  visible boolean,
  servicios
  set < text >,
    PRIMARY KEY (agente, inmobiliaria, proyecto, titulo)
);
CREATE TABLE inmoitt.inmuebles_cliente (
  cliente text,
  inmobiliaria text,
  proyecto text,
  titulo text,
  agente text,
  borrado boolean,
  cuartos smallint,
  descripcion text,
  direccion frozen < direccion >,
  estado text,
  foto text,
  metros_cuadrados decimal,
  notario text,
  pisos smallint,
  precio_renta decimal,
  precio_venta decimal,
  visible boolean,
  servicios
  set < text >,
    PRIMARY KEY (cliente, inmobiliaria, proyecto, titulo)
);
CREATE TABLE inmoitt.inmuebles_cliente_inmobiliaria (
  inmobiliaria text,
  proyecto text,
  titulo text,
  cliente text,
  agente text,
  borrado boolean,
  cuartos smallint,
  descripcion text,
  direccion frozen < direccion >,
  estado text,
  foto text,
  metros_cuadrados decimal,
  notario text,
  pisos smallint,
  precio_renta decimal,
  precio_venta decimal,
  visible boolean,
  servicios
  set < text >,
    PRIMARY KEY (inmobiliaria, proyecto, titulo, cliente)
);
CREATE TABLE inmoitt.inmuebles_notario (
  notario text,
  inmobiliaria text,
  proyecto text,
  titulo text,
  agente text,
  borrado boolean,
  cuartos smallint,
  descripcion text,
  direccion frozen < direccion >,
  estado text,
  foto text,
  metros_cuadrados decimal,
  pisos smallint,
  precio_renta decimal,
  precio_venta decimal,
  visible boolean,
  servicios
  set < text >,
    PRIMARY KEY (notario, inmobiliaria, proyecto, titulo)
);
CREATE TABLE inmoitt.inmuebles_proyecto (
  proyecto text,
  inmobiliaria text,
  titulo text,
  agente text static,
  borrado boolean,
  cuartos smallint,
  descripcion text,
  direccion frozen < direccion >,
  estado text,
  foto text,
  metros_cuadrados decimal,
  notario text,
  pisos smallint,
  precio_renta decimal,
  precio_venta decimal,
  visible boolean,
  servicios
  set < text >,
    PRIMARY KEY (proyecto, inmobiliaria, titulo)
);
CREATE TABLE inmoitt.notario (
  inmobiliaria text,
  rfc text,
  apellido text,
  correo text,
  foto text,
  nombre text,
  PRIMARY KEY (inmobiliaria, rfc)
);
CREATE TABLE inmoitt.notarios_proyecto (
  nombre text,
  inmobiliaria text,
  notario text,
  PRIMARY KEY (nombre, inmobiliaria, notario)
);
CREATE TABLE inmoitt.paquetes (
  id text,
  id_item text,
  total decimal static,
  alto_item decimal,
  ancho_item decimal,
  foto text,
  item text,
  PRIMARY KEY (id, id_item)
);
CREATE TABLE inmoitt.precarga (
  empresa text,
  id text,
  cajas_chicas int,
  cajas_grandes int,
  cajas_medianas int,
  cliente text,
  destino frozen < direccion >,
  fecha date,
  hora time,
  origen frozen < direccion >,
  telefono text,
  muebles list < frozen < mueble >>,
  PRIMARY KEY (empresa, id)
);
CREATE TABLE inmoitt.precarga_cliente (
  cliente text,
  id text,
  cajas_chicas int,
  cajas_grandes int,
  cajas_medianas int,
  destino frozen < direccion >,
  empresa text,
  fecha date,
  hora time,
  origen frozen < direccion >,
  telefono text,
  muebles list < frozen < mueble >>,
  PRIMARY KEY (cliente, id)
);
CREATE TABLE inmoitt.proyectos (
  inmobiliaria text,
  nombre text,
  ciudad text,
  inicio text,
  PRIMARY KEY (inmobiliaria, nombre)
);
CREATE TABLE inmoitt.proyectos_agente (
  agente text,
  inmobiliaria text,
  nombre text,
  ciudad text,
  inicio text,
  PRIMARY KEY (agente, inmobiliaria, nombre)
);
CREATE TABLE inmoitt.proyectos_notario (
  notario text,
  inmobiliaria text,
  nombre text,
  ciudad text,
  inicio text,
  PRIMARY KEY (notario, inmobiliaria, nombre)
);
CREATE TABLE inmoitt.servicio (nombre text PRIMARY KEY);
CREATE TABLE inmoitt.transporte_flete (
  flete text,
  transporte text,
  cargadores list < text >,
  paquete list < text >,
  PRIMARY KEY (flete, transporte)
);
CREATE TABLE inmoitt.transportes (
  empresa text,
  matricula text,
  activo boolean,
  capacidad decimal,
  PRIMARY KEY (empresa, matricula)
);