import './App.css';
import Counter from './components/Counter';
import Title from './components/Title';
import useCountDown from './hooks/useCountDown';

function App() {
  const [day, hour, minute, second] = useCountDown('febru 12, 2024 00:00:00 ');

  return (
    <div className="App">
      <div className="container">
        <Title title="contagem regressiva" />
        <div className="countDown_Container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
