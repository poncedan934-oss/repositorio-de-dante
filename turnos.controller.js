import { eventBus } from '../events/eventBus.js';

async function crearTurno(turno) {
  try {
    const turnos = await leerTurnos();

    turnos.push(turno);

    await guardarTurnos(turnos);

    eventBus.emit('turno:creado', turno);

    return turno;
  } catch (error) {
    console.error('Error al crear turno:', error);
    throw error;
  }
}

async function actualizarTurno(id, datos) {
  try {
    const turnos = await leerTurnos();

    const indice = turnos.findIndex((turno) => turno.id === id);

    if (indice === -1) {
      throw new Error(`No existe el turno con ID ${id}`);
    }

    const turnoActualizado = {
      ...turnos[indice],
      ...datos,
      id,
    };

    turnos[indice] = turnoActualizado;

    await guardarTurnos(turnos);

    eventBus.emit('turno:actualizado', turnoActualizado);

    return turnoActualizado;
  } catch (error) {
    console.error('Error al actualizar turno:', error);
    throw error;
  }
}

async function eliminarTurno(id) {
  try {
    const turnos = await leerTurnos();

    const indice = turnos.findIndex((turno) => turno.id === id);

    if (indice === -1) {
      throw new Error(`No existe el turno con ID ${id}`);
    }

    const [turnoEliminado] = turnos.splice(indice, 1);

    await guardarTurnos(turnos);

    eventBus.emit('turno:eliminado', turnoEliminado);

    return turnoEliminado;
  } catch (error) {
    console.error('Error al eliminar turno:', error);
    throw error;
  }
}

export { crearTurno, actualizarTurno, eliminarTurno };
