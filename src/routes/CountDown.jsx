/* eslint-disable react-hooks/rules-of-hooks */
import Counter from '../components/Counter';
import Title from '../components/Title';
import useCountDown from '../hooks/useCountDown';
import { CountDownContext } from '../context/CountDownContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import '../components/Counter.modules.css';

const CountDown = () => {
  const { event } = useContext(CountDownContext);
  if (!event) return <Navigate to="/" />;
  const eventTitle = event.title;

  const [day, hour, minute, second] = useCountDown(event.date);
  return (
    <div className="App">
      <Title title={eventTitle} />
      <div className="countDown_Container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </div>
  );
};

export default CountDown;
