# Edición mensual · esquema y reglas

## Entrada tabular

La plantilla `plantillas/datos_mensuales.csv` contiene encabezados sin datos ficticios. Si los tuyos tienen otros nombres, selecciona las tres columnas en el editor.

| Campo lógico | Formato | Ejemplo de estructura, sin dato de negocio |
| --- | --- | --- |
| fecha | AAAA-MM-DD o AAAA-MM | Día válido o periodo mensual |
| categoria | Texto de hasta 120 caracteres | Nombre de la agrupación |
| valor | Decimal con signo y hasta 4 decimales | Número sin moneda ni separador de miles |

Se aceptan UTF-8 con o sin BOM, separadores coma o punto y coma, comillas dobles y saltos de línea dentro de campos citados. Las tres columnas asignadas deben ser diferentes. Los encabezados vacíos/repetidos, filas con distinta anchura, fechas imposibles, exponentes, Infinity, NaN y valores vacíos se rechazan. Fechas entre 1900 y 2199. Máximo 12 dígitos enteros y 4 decimales por valor.

Límites: CSV de 2 MB y hasta 10 000 registros en el conjunto final. Se muestran 12 filas en la vista de importación y 200 en la tabla de edición por periodo, pero se calculan y exportan todas. El modo reemplazar conserva plantilla, notas e imágenes; el modo agregar acumula registros.

Las filas idénticas por fecha, categoría y valor se señalan y se conservan: pueden representar hechos distintos. Revisa si deben existir. Si se mezclan filas mensuales y diarias en el mismo periodo, se advierte para evitar sumar un total junto a su detalle. No hay deduplicación automática.

## Un solo indicador

Cada conjunto debe contener una misma magnitud y unidad. El editor SUMA observaciones. No mezcles horas con USD, porcentajes con cantidades ni valores de periodos incompatibles. Un promedio no se puede obtener sumando promedios sin conocer sus ponderaciones. Para un indicador no aditivo, prepara una tabla con la base necesaria mediante una ampliación futura o incorpora un gráfico aportado y explica su método.

El nombre de la categoría se conserva y se agrupa tras quitar espacios exteriores. «Ventas» y «ventas» son categorías distintas. El editor no normaliza significados automáticamente.

## Precisión y agregación

Los valores se guardan como cadenas decimales. Para sumar, cada valor se multiplica por 10 000 y se representa con BigInt. La suma por mes/categoría conserva hasta cuatro decimales exactos; se eliminan ceros finales solo en su presentación. No se altera el total por ordenar o agrupar.

Los tamaños de las barras usan coordenadas proporcionales; las etiquetas y tablas se construyen desde las sumas exactas. Las cantidades negativas tienen barras hacia el lado negativo y otro color. Un total cero conserva su etiqueta.

En la gráfica por categorías se muestran hasta 12 categorías de mayor valor absoluto; las restantes se agrupan y suman en «Otras». La tabla conserva todas las categorías. La perspectiva mensual muestra hasta seis meses con registros anteriores o iguales al seleccionado; no rellena periodos ausentes con cero y no afirma igual cobertura.

## Comparación

Selecciona un mes anterior. Los totales registrados pueden consultarse sin afirmar comparabilidad, pero la variación requiere confirmar manualmente la misma cobertura, unidad y criterio y tener registros en ambos periodos. Una modificación de datos o plantilla borra esa confirmación para revisarla de nuevo.

- Cambio absoluto = total actual − total anterior.
- Variación porcentual = (actual − anterior) / anterior × 100.
- El porcentaje se calcula solo cuando la base anterior es positiva. Con base cero o negativa se indica que no se calcula.
- El porcentaje se redondea a dos decimales al más cercano; el empate se aleja de cero.

La aplicación no puede inferir si un mes está completo: ausencia de registros no demuestra ausencia de actividad. La confirmación de comparabilidad corresponde al responsable del informe.

## Texto y plantilla

La descripción por reglas cuenta observaciones/categorías, informa su suma y señala la categoría de mayor valor. No explica causas ni crea conclusiones. El informe la identifica para revisión. Las notas y conclusiones son manuales y pertenecen al mes elegido; se muestran como pendientes si están vacías.

La plantilla general conserva título, organización, indicador, unidad, autor, títulos de notas/conclusiones y visibilidad de descripción, barras, perspectiva, tabla e imágenes. Cambiarla afecta a las próximas vistas de cualquier mes, no a HTML ya descargados.

## Imágenes

Solo PNG/JPEG. Máximo 1,5 MB por imagen, seis imágenes y cuatro millones de caracteres de imagen codificada en conjunto. Se verifican firma de archivo, formato y decodificación antes de ofrecer la confirmación. Los archivos dañados y SVG no se incorporan.

Cada imagen conserva mes, título y pie. No aporta números a las sumas ni texto leído por OCR. La imagen original se incorpora como data URL al respaldo y HTML. El espacio disponible en el navegador puede ser menor que el límite técnico: si guardar falla, se avisa y el estado permanece en memoria.

## Salidas y restauración

- HTML autónomo: CSS, gráficos SVG e imágenes incrustadas. Usa Imprimir para imprimir o guardar como PDF según el navegador.
- CSV: todos los registros del conjunto; no incluye notas, figuras ni plantilla.
- JSON de respaldo: app=`edicion-jorge`, version=1; period, comparison, comparable, template, rows, reports e images.
- JSON de plantilla: mismo app/version, kind=`template` y template. Al restaurarlo solo cambia la plantilla.

La recuperación completa reemplaza el estado después de validarlo y mostrar un resumen. La restauración de plantilla conserva registros/notas/imágenes. Un archivo inválido no cambia el estado anterior. Máximo 10 MB por JSON de entrada.

Los textos CSV que podrían iniciar fórmulas reciben un apóstrofo protector; algunos lectores pueden mostrarlo. Los números negativos válidos se mantienen como números. JSON es el respaldo recomendado para restauración fiel.

Clave local: `ibero-jorge-edicion-v1`. Los datos no se envían a un servidor. En archivos file:, la persistencia depende del navegador; usa el aviso de estado y los respaldos. Las fuentes técnicas están en FUENTES_TECNICAS.md.
