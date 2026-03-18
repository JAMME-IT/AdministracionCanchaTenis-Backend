**Introducción**
Dictada la propuesta de la cátedra, se prosigue a indagar sobre una problemática que pudiera brindarnos una base para realizar el proyecto. En la búsqueda se identificó la necesidad de mejorar la gestión en un club de tenis, específicamente en la administración de turnos y cobros.

Actualmente, la asignación de turnos se gestiona mediante un grupo de WhatsApp. Esta modalidad presenta diversas dificultades, como la falta de control centralizado, la posibilidad de errores humanos y la ausencia de un registro histórico que permita generar reportes o estadísticas. Asimismo, la gestión financiera se realiza de forma manual en planillas de Excel, lo que incrementa el riesgo de pérdida de información y dificulta el seguimiento de pagos y cuotas, además de demandar un tiempo excesivo a Adriana.

Esta problemática afecta la organización diaria del club, especialmente ante la alta demanda de turnos, la variación en las tarifas para socios y no socios, y la necesidad de coordinar actividades de profesores particulares. La inexistencia de un sistema automatizado también limita la flexibilidad para modificar la duración de los turnos o actualizar costos de manera ágil.

La necesidad de proponer un sistema que solo centralice la administración de turnos, socios (y no socios), pagos y recursos del club resulta prioritaria, ya que mejorará la eficiencia en la organización, reducira errores, tiempo y brindará información útil para la toma de decisiones. Ademas, permitira optimizar la experiencia de los usuarios, tanto socios como no socios, asegurando un servicio ordenado y confiable.
Descripción de la Organización
Para la gestión actual del club de tenis, se utiliza principalmente un grupo de WhatsApp desde el cual, a partir de las 00:00 horas de cada día, los socios y no socios pueden solicitar turnos de cancha. Los turnos tienen una duración determinada según el día: una hora en días de semana , y , una hora y media durante fines de semana y feriados. El horario de funcionamiento del club se extiende de 8:00 a 22:00 horas.
En cuanto a la gestión financiera, la misma se administra mediante planillas de Excel. Allí se registran las cuotas de los socios, mientras que los pagos relacionados con los turnos se transfieren directamente a la cuenta de Mercado Pago de Adriana (Clienta), quien además gestiona los turnos.
El club de momento no maneja directamente grupo familiar, etc. Tampoco tiene definidas multas ni sanciones en el caso de que un socio o no socio solicite un turno, no lo cancele y no asista al turno. 
Cabe destacar que el encendido de luces se realiza entre las 18:30 y 19:00 horas. Actualmente, el costo de la luz es de $4000 por turno, independientemente de la cantidad de jugadores, y este monto adicional debe ser abonado tanto por socios como por no socios. Por otro lado, los no socios abonan únicamente el turno correspondiente, siendo el valor de $4000 por persona y por hora.
Respecto al acceso, el establecimiento cuenta con un candado con clave en la puerta principal, cuyo código solo conocen los socios. 
La duración de los turnos constituye un aspecto flexible que Adriana desea poder modificar según las necesidades. Asimismo, los profesores particulares que dictan clases en el club informan mediante WhatsApp a Adriana los horarios, días y numero de cancha en los que desarrollan sus actividades, para que ella misma registre las canchas como ocupadas en la plantilla de excel de gestión de turnos.
El club cuenta con tres canchas habilitadas y con un cobrador externo, quien se encarga de la recaudación de las cuotas de los socios a cambio de una comisión por su servicio.
Función a sistematizar
La función principal a sistematizar en el club de tenis incluye:
La administración de turnos de cancha, permitiendo a socios y no socios solicitar, modificar y cancelar turnos de manera centralizada.


La gestión de pagos y cuotas, tanto de los socios como del cobro por alquiler de canchas y uso de luz.


El control de recursos del club, incluyendo disponibilidad de canchas, seguimiento histórico de turnos y pagos.
Esta sistematización reemplazará la gestión actual realizada mediante WhatsApp y planillas de Excel, generando un registro único, confiable y accesible del funcionamiento diario del club.Cabe aclarar que  no cortará de manera definitiva la comunicación por WhatsApp, ya que por ese medio será donde tanto el socio como el no socio se comunique con Adriana, ya sea para enviar comprobantes de pago o para, en caso del no socio, solicitar su alta como socio.


Objetivos del sistema
A continuación, se presentan los objetivos que se buscan alcanzar con la implementación del sistema:
Optimizar la gestión de turnos y cobros, evitando errores humanos y conflictos de horarios.


Centralizar la información de usuarios, turnos, pagos, para facilitar consultas y reportes.


Permitir flexibilidad en la administración, como cambios de duración de turnos o actualización de tarifas de forma ágil.


Generar estadísticas para mejorar la toma de decisiones del club.


Mejorar la experiencia de los usuarios, reduciendo el tiempo de gestión y mejorando la trazabilidad y seguimiento en los registros de pagos y turnos.
Alcance
El sistema ofrecerá:
Gestión de usuarios con distintos roles (socios, no socios y administradores).


Reserva de turnos de canchas.


Registro y consulta de: usuarios (socios o no socios o admin), pagos, turnos, cuotas, valores de cuotas, valores de luz y canchas.


Visualización de listas de socios, usuarios, cuotas, pagos, turnos, valores de cuota,valores de luz.


Historial de cuotas, pagos,turnos, valores de cuota,valores de luz.

Límites
El sistema no incluye gestión de inventario de equipamiento ni mantenimiento de canchas.


El sistema no contempla la emisión de facturas oficiales ni integración con un sistema contable externo (ARCA), ya que solo se hará cargo de registros internos.


El sistema no reemplaza la comunicación directa entre: socio/no socio y la administradora, socios y profesores .


El sistema no verifica ni controla la asistencia física a dichos turnos, ya que el acceso al club se realiza de manera autónoma; la gestión se basa en el turno registrado y en la buena fe de los socios / no socios de asistir o cancelar el mismo.
Requerimientos Funcionales

Los siguientes requerimientos funcionales fueron definidos a partir de la situación actual y los objetivos del sistema para la gestión integral del club de tenis.
Su propósito es establecer de forma clara las funcionalidades que debe de ofrecer nuestra solución, contemplando la administración de usuarios, turnos y pagos para el club.

RF-1 El sistema debe permitir registrar al usuario con datos personales.
RF-2 El sistema debe permitir iniciar sesión al usuario.
RF-3 El sistema debe permitir al administrador modificar roles: Administrador, socio, no socio.
RF-4 El sistema debe permitir consultar la lista de usuarios, con sus datos relevantes.
RF-5 El sistema debe permitir al administrador modificar la información de los usuarios.
RF-6 El sistema debe permitir al usuario socio/no socio modificar información personal propia.
RF-7 El sistema debe permitir dar de baja lógica a un usuario.
RF-8 El sistema debe permitir la redirección a WhatsApp para que el usuario solicite el cambio de alta de “No socio” a “Socio”.
RF-9 El sistema debe permitir buscar usuarios por nombre y apellido.
RF-10 El sistema debe permitir filtrar usuarios por estado.
RF-11 El sistema debe permitir filtrar usuarios por tipo de rol.
RF-12 El sistema debe permitir al usuario reservar un Turno.
RF-13 El sistema debe informar al usuario si su turno requiere uso de luz y el costo adicional correspondiente.
RF-14 El sistema debe permitir cancelar un Turno
RF-15 El sistema debe permitir al administrador modificar la duración de los turnos.
RF-16 El sistema debe permitir al administrador modificar la franja horaria de activación de la iluminación.
RF-17 El sistema debe permitir al administrador asignar un estado a la cancha indicando la razón.
RF-18 El sistema debe permitir a los socios visualizar el historial de turnos propios.
RF-19 El sistema debe permitir al administrador registrar el pago de turno de un no socio.
RF-20 El sistema debe permitir generar automáticamente las cuotas mensuales para todos los socios.
RF-21 El sistema debe permitir registrar pagos de cuotas mensuales de socios.
RF-22 El sistema debe permitir consultar un listado de socios con el estado de sus cuotas.
RF-23 El sistema debe permitir buscar socios en el listado de cuotas por nombre y apellido.
RF-24 El sistema debe permitir filtrar cuotas por estado .
RF-25 El sistema debe permitir filtrar cuotas por fecha.
RF-26 El sistema debe permitir al socio consultar su listado de cuotas y pagos.
RF-27 El sistema debe permitir al administrador modificar la tarifa de turnos.
RF-28 El sistema debe permitir al administrador modificar la tarifa de la luz.
RF-29 El sistema debe permitir al administrador modificar el valor de las cuotas mensuales.
RF-30 El sistema debe permitir consultar el historial de cambios de tarifas de cuotas.
RF-31 El sistema debe permitir filtrar el historial de cuotas por fecha y monto.
RF-32 El sistema debe permitir visualizar estadísticas generales.
RF-33 El sistema debe permitir al administrador registrar el pago de luz.
RF-34 El sistema debe permitir al administrador registrar la franja horaria con los dias de funcionamiento del club.
RF-35 El sistema debe permitir al administrador modificar la franja horaria con los dias de funcionamiento del club.
RF-36 El sistema debe permitir consultar todos los turnos vigentes del club.
RF-37 El sistema debe permitir al usuario buscar turnos por nombre y apellido.
RF-38 El sistema debe permitir consultar los turnos vigentes filtrados por fecha.
RF-39 El sistema debe permitir confirmar la reserva de turnos con luz o sin luz.
RF-40 El sistema debe permitir al usuario cancelar un turno vigente desde la interfaz.
RF-41 El sistema debe permitir filtrar cuotas por fecha de generación.
RF-42 El sistema debe permitir registrar un pago de cuota manualmente desde el panel del administrador.
RF-43 El sistema debe permitir consultar los valores actuales de turnos, luz y cuotas.
RF-44 El sistema debe permitir consultar el historial de pagos de luz realizados.
RF-45 El sistema debe permitir consultar estadísticas financieras de pagos, cuotas y uso de turnos.
RF-46: El sistema debe permitir cerrar sesión al usuario autenticado.

Requerimientos No Funcionales
RNF-1 El sistema debe utilizar una base de datos relacional.
RNF-2 El sistema debe requerir autenticación para ciertas funciones según el rol.
RNF-3 El sistema debe ser responsivo, posible de usar en celulares, tablets y computadoras.

Reglas de Negocio
RN-1 Un turno solo puede cancelarse hasta 1 hora antes de su inicio.
RN-2 Un usuario solo puede realizar 2 turnos al dia
RN-3 Las cuotas mensuales pueden abonarse en varios pagos parciales
RN-4  El cambio de estado de un usuario (activo, inactivo, etc.) solo puede ser realizado por un administrador
RN-5 Los roles de usuario no pueden ser modificados por los propios usuarios; solo el administrador puede gestionarlos.
RN-6 Solo los usuarios registrados pueden solicitar turnos.
RN-7 Las reservas de turnos deben realizarse exclusivamente a través de la aplicación web.
RN-8 Los usuarios deberán enviar los recibos al administrador por medio de WhatsApp
RN-9 Los usuarios que adeuden 2 meses de cuotas, sólo podrán solicitar 1 turno más antes de regularizar su situación.
RN-10  El administrador no va a tener restricción sobre la cantidad de turnos que puede solicitar.
RN-11 Los turnos se pueden reservar con un día de anticipación como máximo.








