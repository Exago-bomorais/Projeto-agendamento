import { useState } from 'react';

import { event } from '../../types/typeEvent';
import { Event, EventContainer, Label } from './CreateEvent.style';

type Props = {
  onAddEvent: ({ id, dateInit, nameEvent, endTime, startTime }: event) => void;
};

function CreateEvent({ onAddEvent }: Props) {
  const [dataFieldInit, setDataFieldInit] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [eventName, seteventName] = useState<string>('');
  const [id, setId] = useState<number>(2);

  function addEvent() {
    const event = {
      id: id,
      dateInit: dataFieldInit,
      startTime: startTime,
      endTime: endTime,
      nameEvent: eventName,
      people: [],
    };

    setId(id + 1);

    onAddEvent(event);
  }

  return (
    <Event>
      <EventContainer>
        <Label>Data do Evento</Label>
        <input
          className="date"
          type="date"
          value={dataFieldInit}
          onChange={(e) => {
            setDataFieldInit(e.currentTarget.value);
          }}
        />
      </EventContainer>
      <EventContainer>
        <Label>Horario Inicio do Evento</Label>
        <input
          className="date"
          type="time"
          value={startTime}
          onChange={(e) => {
            setStartTime(e.currentTarget.value);
          }}
        />
      </EventContainer>
      <EventContainer>
        <Label>Horario Fim do Evento</Label>
        <input
          className="date"
          type="time"
          value={endTime}
          onChange={(e) => {
            setEndTime(e.currentTarget.value);
          }}
        />
      </EventContainer>
      <EventContainer>
        <Label>Nome do evento</Label>
        <input
          className="text"
          type="text"
          value={eventName}
          onChange={(e) => {
            seteventName(e.currentTarget.value);
          }}
        />
      </EventContainer>
      <button onClick={addEvent}>Cadastrar Evento</button>
    </Event>
  );
}

export default CreateEvent;
