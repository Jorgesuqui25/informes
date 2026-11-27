# JORGE FABIAN SUQUISUPA CALLE · Edición mensual

**Contexto del formulario:** Ecuador; nivel principiante; situación web declarada: `no_tengo`.

Concordante con el recorrido cargar datos o figuras y emitir un informe repetible. La adaptación exacta a su formato y a varios indicadores permanece pendiente de sus archivos reales.

| Solicitud del formulario | Correspondencia comprobada | Estado | Qué falta o debe validarse |
| --- | --- | --- | --- |
| **Mantener gráficos, tablas y estructura estables al cambiar los datos del mes.** — «Automatizar informes mensuales los cuales contienen graficos y tablas pero estos graficos siempre son los mismos solo que actualizados con la información de cada mes» | Conserva una plantilla editable mientras cambian los datos, notas y figuras del mes seleccionado. La estructura disponible puede reutilizarse, aunque todavía no reproduce un informe original que no se recibió. | Cubierto parcialmente | La plantilla local se conserva entre periodos. Para reproducir exactamente el informe de Jorge se requiere un informe aprobado, sus tablas de origen, indicadores/unidades y reglas de agregación. El formulario no contenía esos archivos. |
| **Incorporar tablas de origen al informe.** — «Cargar los graficos y tablas» | Importa tablas CSV, permite elegir las columnas de fecha, categoría y valor, y muestra una revisión antes de incorporarlas. También permite añadir o corregir registros manualmente. | Disponible localmente | La carga es CSV o captura manual, con un indicador y unidad por conjunto. Excel nativo debe exportarse a CSV; archivos y columnas reales permitirán confirmar el mapeo específico. |
| **Incorporar gráficos o tablas que ya estén preparados.** — «Cargar los graficos y tablas» | Incorpora gráficos o tablas aportados como imágenes PNG o JPEG, con título, pie y mes. Las figuras quedan incluidas en el informe sin extraer ni interpretar automáticamente sus cifras. | Disponible localmente | Los gráficos/tablas aportados se incorporan como PNG/JPEG con título, fuente y periodo, dentro de los límites de imagen documentados. No se extraen números de una imagen. |
| **Generar gráficos y tablas a partir de los datos mensuales.** — «que me de haciendo los graficos y tablas» | Calcula sumas por categoría y mes, y genera gráficos y tablas con esos resultados. Trabaja con un indicador y una unidad por conjunto, mostrando también hasta seis meses que tienen registros. | Disponible localmente | Cubre sumas por categoría, barras y hasta seis meses con registros para un indicador agregable. Tasas, ponderaciones o varias unidades exigen definir reglas reales; no se asume que todos los gráficos de su informe sean sumas. |
| **Obtener un documento completo para revisar y compartir.** — «que me emita el informe» | Genera un informe HTML autónomo con datos, gráficos, imágenes, notas y conclusiones registradas. Se puede descargar e imprimir desde el navegador. | Disponible localmente | Se genera HTML autónomo e impresión desde el navegador. Notas y conclusiones son manuales. No se pidió expresamente un envío automático o ejecución programada, y no se cuentan como requisitos incumplidos. |
| **Disponer de una herramienta web propia para crear el informe.** — «no_tengo» | Incluye una web propia con presentación, método, editor, contacto y guía inicial. La carpeta puede abrirse como sitio estático y permite empezar a producir informes locales. | Disponible localmente | La carpeta estática está lista para apertura y despliegue; el formato real del informe aún necesita la muestra indicada. |

### Ajustes realizados en esta revisión

- Distinción explícita entre plantilla local repetible y réplica del informe no recibido; insumos requeridos y conteo vigente de pruebas.

### Evidencia y verificación dirigida

- Inspección del código y recorrido documental. Solo se modificó documentación; se conserva la evidencia funcional previa de 16/16 sin atribuir una nueva ejecución..

**Documentación del proyecto:** [Ficha de necesidades y alcance](NECESIDADES_Y_ALCANCE.md) · [Instrucciones](LEEME.txt).
