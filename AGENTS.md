# AGENTS.md

Guia para agentes y colaboradores que trabajen en `TaskFlowSPA`.

## Mision del proyecto

Construir una SPA de gestion de tareas con JavaScript Vanilla, HTML, CSS y Tailwind CSS que sirva como practica de arquitectura frontend moderna, modularizacion, routing del lado del cliente y control de acceso sin usar frameworks SPA.

## Prioridades del repositorio

1. Mantener la aplicacion realmente modular.
2. Separar vista, logica, estado y acceso a datos.
3. Evitar soluciones acopladas o dificiles de escalar.
4. Conservar una experiencia SPA fluida sin recargas completas.
5. Respetar roles, permisos y proteccion de rutas en cada cambio.

## Stack y restricciones

- JavaScript Vanilla con modulos ES.
- HTML y CSS.
- Tailwind CSS para la construccion de vistas y utilidades de interfaz.
- Vite como entorno de desarrollo.
- Backend fake con `json-server`.
- No introducir React, Vue, Angular ni librerias que desplacen el objetivo pedagogico del proyecto.

## Principios de implementacion

- Cada modulo debe tener una responsabilidad clara.
- La manipulacion del DOM debe permanecer organizada y predecible.
- La logica de negocio no debe quedar incrustada en listeners o plantillas extensas.
- El acceso a `localStorage`, `sessionStorage` o APIs remotas debe envolverse en utilidades o servicios.
- Las validaciones de autenticacion y permisos deben centralizarse.

## Dominios funcionales

### Autenticacion

- Login y logout.
- Persistencia de sesion.
- Restauracion de sesion al recargar.

### Routing

- Navegacion con `History API`.
- Rutas publicas y privadas.
- Fallback 404.
- Guards antes del render.

### Tareas

- Listado de tareas.
- Creacion, edicion y eliminacion.
- Filtros o estados basicos si se implementan.
- Restriccion por propietario para usuarios `USER`.

### Administracion

- Solo accesible para `ADMIN`.
- Gestion de usuarios.
- Visualizacion global de tareas.
- Cambio de roles y permisos si el modulo lo incluye.

## Roles base

### `ADMIN`

- Acceso total al sistema.
- Gestiona usuarios.
- Visualiza todas las tareas.
- Modifica roles y permisos.

### `USER`

- Gestiona solo sus tareas.
- Ve solo informacion propia.

## Convenciones sugeridas de estructura

Usar o aproximarse a una organizacion como esta:

```text
src/
  app/
    router/
    guards/
    store/
  modules/
    auth/
    dashboard/
    tasks/
    admin/
  components/
  services/
  utils/
  styles/
```

## Criterios para nuevas contribuciones

- Antes de agregar codigo, identificar si pertenece a `app`, `modules`, `components`, `services` o `utils`.
- Si una pieza se reutiliza entre vistas, moverla a `components`.
- Si una funcion conoce endpoints, almacenamiento o fetch, moverla a `services`.
- Si una regla depende de autenticacion o permisos, evaluar si debe vivir en `guards` o `utils/auth`.
- No duplicar plantillas o logica cuando una abstraccion simple pueda resolverlo.

## Reglas de UI y renderizado

- Las vistas deben renderizarse dinamicamente en un contenedor raiz.
- La navegacion interna debe usar el router SPA, no recargas con enlaces tradicionales.
- Tailwind CSS es la base para construir las vistas, manteniendo una interfaz consistente y facil de escalar.
- Mantener la interfaz clara y consistente, priorizando legibilidad y estructura.
- Evitar mezclar estilos inline con logica salvo que exista una razon puntual.

## Datos y persistencia

- El backend fake sera la fuente principal de datos persistentes.
- La sesion puede persistirse localmente para simulacion, pero su manejo debe ser encapsulado.
- No asumir permisos solo por ocultar botones; validar acceso tambien en guards y acciones.

## Calidad esperada

- Funciones pequenas y con nombres claros.
- Modulos cohesivos.
- Flujo de datos facil de seguir.
- Comentarios solo cuando aporten contexto real.
- Evitar codigo muerto y archivos multiproposito.

## Orden recomendado de construccion

1. Router SPA base.
2. Layout principal.
3. Modulo de autenticacion.
4. Manejo de sesion.
5. Guards de rutas.
6. CRUD de tareas.
7. Dashboard.
8. Panel administrativo.

## Que debe evitar un agente

- Introducir frameworks SPA.
- Resolver todo en un solo archivo.
- Acoplar vistas directamente a estructuras rigidas de datos.
- Saltarse validaciones de rol por simplicidad temporal.
- Romper la navegacion SPA usando recargas completas innecesarias.

## Definicion de exito

Una contribucion es correcta si ayuda a que `TaskFlowSPA` siga siendo una SPA modular, entendible y escalable, con autenticacion, rutas protegidas, roles claros y un CRUD de tareas coherente con los permisos de cada usuario.
