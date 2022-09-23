import './App.css';
import Leitor from './components/reader/Leitor';
import Adicionar from './components/addPlayer/Adicionar';

function App() {
  return (
    <div className="App">
      <Adicionar />
      <Leitor />
    </div>
  );
}

export default App;
