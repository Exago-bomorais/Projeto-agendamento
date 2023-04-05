import { event } from '../../types/typeEvent';
import { Card, CardContent, Container } from './CardEvent.style';

type Props = {
  events: event[];
};

function CardEvent({ events }: Props) {
  return (
    <Container>
      {events.map((event) => (
        <Card key={event.id}>
          <CardContent>
            <div className="cardHeader">
              <img src="/icon-calendar.svg" />
              <span>{event.startTime}</span>
            </div>
            <p className="pOne">{event.nameEvent}</p>
            <span className="pTwo">Brás-Zona leste</span>
            <div className="peopleQuantity">
              <span className="circleBlue"></span>
              <span className="textPeople">{`${event.people.length} Participantes`}</span>
            </div>
            <div className="button">
              <button>Abrir evento</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default CardEvent;
