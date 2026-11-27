# Resultados de verificación

**Resultado vigente:** 16 verificaciones incluidas aprobadas en la revisión del 26 de noviembre de 2026. La entrega inicial del 25 de noviembre tenía 13; las tres regresiones añadidas se describen abajo. La batería histórica conjunta de Carlos/Jorge no se suma de nuevo a este total.

## Cobertura

- Inicio vacío; suma exacta de decimales positivos y negativos.
- Confirmación de comparabilidad, cambio absoluto, porcentaje y base cero/negativa.
- Mes sin registros identificado como ausencia de datos, sin porcentaje engañoso.
- CSV configurable, vista previa, validación y confirmación.
- Rechazo de fechas imposibles, valores no finitos y mapeos ambiguos.
- SVG con etiquetas exactas y contenido HTML escapado.
- Captura/edición de registros y notas distintas por periodo.
- Imágenes raster con validación, previsualización y confirmación; rechazo de formato no admitido.
- HTML con gráficos e imágenes incrustadas y descarga real del Blob.
- Restauración completa y restauración de plantilla sin sustituir datos.
- Fallo de almacenamiento mantiene memoria y avisa; navegación ARIA e impresión.

## Método y límites

Verificación ejecutada el 25 de noviembre de 2026 sobre los JavaScript entregados. Se usó Node VM y un DOM instrumentado construido a partir del HTML real; las descargas se inspeccionaron como Blob y se probó la continuidad en memoria al fallar localStorage. Las entradas de prueba son sintéticas y están únicamente en pruebas; la aplicación empieza vacía.

No se abrió un navegador, no se ejecutó Playwright/CUA/CDP, no se levantó un servidor y no se tomó ninguna captura. La sesión tenía una restricción explícita contra la vista de archivos locales en navegador. El DOM de pruebas no comprueba la composición visual ni el motor real de impresión/decodificación; su alcance es lógica, eventos, estado y archivos. El test de impresión verifica que se invoque el diálogo, no una impresora real. La decodificación de imagen se simula en el entorno de pruebas para ejercitar tanto éxito como rechazo; la aplicación llama al decodificador del navegador al usarse.

La revisión estática confirma cinco HTML, rutas internas y anclas existentes, IDs únicos, CSS/JS separados y recursos locales. Se revisaron reglas responsive, tamaños legibles, foco visible, reduced motion y scroll local de tablas mediante código; no se afirma inspección visual a 320 px. No se publicó ni envió ningún archivo.

## Repetir las pruebas incluidas

Con Node instalado, desde esta carpeta:

```sh
node pruebas/verificar.cjs
```

El harness usa assets/app.js, assets/core.js y assets/workspace.js del sitio actual. La fixture herramientas-dom.json se generó de esta versión de herramientas.html. Si se modifica el HTML, también se debe regenerar la fixture para probar la estructura nueva. No hay dependencia de otra carpeta de alumno.


## Revisión del 26 de noviembre de 2026

Resultado vigente: **16 grupos aprobados** en las pruebas incluidas del sitio. Se añadieron regresiones para los fallos observados en esta revisión.

Los registros nuevos, la plantilla, las notas y las imágenes pendientes pueden descartarse sin afectar los datos guardados. Cambiar los campos de una imagen preparada invalida su confirmación anterior: hay que prepararla de nuevo. La vista indica si sigue vigente. Los respaldos conservan el mismo formato versión 1.

Se regeneró la fixture DOM desde herramientas.html después de añadir los controles. Se verificaron rutas, anclas, IDs, navegación activa, fuentes locales y sintaxis de estilos por código. Sin navegador, renderizador, servidor, despliegue ni envío de mensajes.


### Respaldo recuperable — revisión del 26 de noviembre

Antes de guardar se mide el JSON completo en UTF-8 con el mismo formato de descarga. Si excede 10 MB, se rechaza el cambio antes de reemplazar los datos y se muestra una explicación. El esquema de respaldo se conserva; la lectura y exportación de datos anteriores siguen disponibles. Verificación adicional de este caso en el informe general.
