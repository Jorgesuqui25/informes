# Jorge Fabián Suquisupa Calle · análisis y alcance

## Punto de partida recibido

Respuesta del 24/11/2026 a las 7:10:56 p. m. País: Ecuador. Experiencia declarada: principiante. No tiene web. Correo: jorge.suquisupa@hotmail.com.

Pidió automatizar informes mensuales que mantienen los mismos gráficos y tablas, actualizados con la información de cada mes. Su objetivo es cargar gráficos/tablas y obtener el informe, o generar esas piezas a partir de datos. No entregó el informe original, archivos de origen ni definiciones de indicadores.

## Necesidad interpretada

La repetición útil depende de separar una plantilla estable de datos que cambian por mes. El producto central es un editor de informes, con una vista del documento y controles claros para datos, estructura y notas.

El diseño editorial blanco, azul tinta y terracota facilita leer y revisar el documento. La portada conceptual muestra la estructura, sin métricas simuladas. La herramienta comienza vacía. Esta es una propuesta editable; no se afirma que replique un formato existente no recibido.

## Función entregada

- Cuatro páginas completas y 404, con método, editor y preparación de la siguiente fase.
- Importación CSV con asignación de columnas, validación, vista previa y confirmación. Reemplazo o agregado de registros; avisos de filas idénticas y mezcla mensual/diaria.
- Captura manual, edición y eliminación confirmada de registros.
- Selección de mes, agrupación por categoría y suma con cuatro decimales mediante enteros escalados.
- Comparación con un mes anterior. Variación solo tras confirmar cobertura, unidad y criterio iguales y con registros en ambos periodos.
- Gráficos SVG con valores exactos, barras positivas/negativas, tabla accesible y perspectiva de hasta seis meses con registros.
- Plantilla editable: título, organización, indicador, unidad, autor y secciones. Descarga de plantilla separada.
- Notas y conclusiones manuales, guardadas por mes. La descripción automática es factual, producida por reglas explícitas de suma/orden y etiquetada así.
- Imágenes PNG/JPEG aportadas con título, pie y periodo; validación antes de incorporarlas. No se leen ni interpretan sus cifras.
- Informe HTML autónomo con SVG e imágenes incrustadas; impresión; exportación CSV y respaldo completo JSON.
- Persistencia local con aviso cuando falla y continuidad en memoria.

## Concordancia con el informe solicitado

**Cubierta la generación local de un informe repetible; pendiente la adaptación exacta al informe real.** CSV o captura manual, gráficos generados, figuras aportadas, plantilla guardada y exportación HTML corresponden a las entradas y la salida que pidió Jorge. La repetición se realiza al cargar el nuevo periodo y generar el documento. No existe una ejecución mensual programada ni actualización desde una fuente conectada.

La estructura original no fue entregada. Tampoco sabemos cuántos indicadores, unidades, gráficos y tablas distintos contiene. El cálculo local usa un indicador y una unidad por conjunto; el soporte de varios indicadores con reglas distintas dentro del mismo informe requiere revisar el modelo real antes de implementarlo. Por eso no se declara una reproducción exacta de su informe ni una automatización completa de su proceso.

## Supuestos explícitos

Cada conjunto de datos representa un solo indicador y unidad. Cada observación debe ser sumable. No se calculan promedios ponderados, tasas ni porcentajes agregados a partir de bases desconocidas. La persona usuaria verifica que no se duplican totales y detalles.

Una categoría con igual nombre se agrupa; nombres distintos, incluidas variaciones de mayúsculas, permanecen separados. La ausencia de filas no equivale a un cero confirmado. Las imágenes no aportan valores a las sumas.

## Pendientes reales

| Objetivo | Se entrega ahora | Lo necesario para la siguiente fase |
| --- | --- | --- |
| Mismo formato cada mes | Plantilla local guardada y editable | Informe original aprobado para ajustar su composición |
| Cargar tablas | CSV con mapeo; captura manual | Archivos reales y reglas de cada columna |
| Cargar gráficos | PNG/JPEG con pie y periodo | Gráficos reales y fuente verificable |
| Generar gráficos | SVG desde los valores importados | Definición del indicador y agregación requerida |
| Emitir el informe | HTML autónomo, impresión y PDF desde navegador | Revisión y autorización para cualquier envío externo |

No hay OCR, IA conectada, sincronización, envío automático ni vínculo a sistemas internos. Los archivos Excel nativos se deben exportar a CSV antes de importarlos. No se actualiza el informe cuando la página está cerrada.

## Primer ejercicio

Usa un mes de un solo indicador y compáralo manualmente con la fuente. Confirma la importación, guarda la plantilla, añade una nota y genera el HTML. Carga el siguiente mes, conserva la plantilla y cambia solo datos/notas. Si comparas, confirma expresamente la cobertura.

## Criterios de aceptación

1. La tabla y las etiquetas de los gráficos coinciden con la suma del archivo de origen.
2. Los datos no cambian hasta confirmar una importación válida.
3. Los errores de archivo no borran el trabajo actual.
4. Los meses sin filas se identifican como sin datos, no como cero.
5. La variación exige confirmación y datos; base cero/negativa no genera porcentaje.
6. Las notas del mes anterior se conservan al cambiar de periodo.
7. La plantilla se reutiliza y puede exportarse/restaurarse sin reemplazar datos.
8. Las imágenes se incorporan sin afirmar una lectura o interpretación automática.
9. El HTML descargado conserva gráficos y figuras sin necesitar internet ni el editor.
10. Un respaldo JSON recupera plantilla, registros, notas, selección y figuras.

## Verificación y límite

Se comprobaron reglas, validaciones, CRUD, importación/mapeo, restauración, descarga, imágenes, notas por periodo y falla de almacenamiento mediante Node VM y DOM instrumentado. No hubo navegador ni renderizado visual; tampoco envío, despliegue o conexión con sistemas externos. QA_RESULTADOS.md recoge los casos verificados.
