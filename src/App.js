import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Trades from './components/Trades/Trades';

function App() {
  return (
    <div className="App flex">
      <Sidebar></Sidebar>
      <Trades></Trades>
    </div>
  );
}

export default App;
