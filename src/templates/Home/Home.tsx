import { useEffect, useState } from 'react';

import CardEvent from '../../components/CardEvent/CardEvent';
import CreateEvent from '../../components/Home/CreateEvent';
import HeaderContent from '../../components/Home/HeaderContent';
import { events } from '../../data/events';
import { event } from '../../types/typeEvent';
import { Container } from './Home.styled';

function App() {
  const [allEvents, setAllEvents] = useState(events);
  const [event, setEvent] = useState<event>();

  useEffect(() => {
    const newEvents = [...allEvents];
    if (event != undefined) {
      newEvents.push(event);
    }
    setAllEvents(newEvents);
    console.log(allEvents);
  }, [event]);

  function AddEvent({
    id,
    dateInit,
    nameEvent,
    startTime,
    endTime,
    people,
  }: event) {
    const newEvent = {
      id,
      dateInit,
      startTime,
      endTime,
      nameEvent,
      people,
    };

    setEvent(newEvent);
  }

  return (
    <Container>
      <HeaderContent />
      <CreateEvent onAddEvent={AddEvent} />
      <CardEvent events={allEvents} />
    </Container>
  );
}

export default App;
