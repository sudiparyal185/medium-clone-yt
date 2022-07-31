import './App.css';
import { LeftBar } from './components/LeftBar';
import { MiddlePanel } from './components/MiddlePanel';
import { RightBar } from './components/RightBar';
function App() {
  return (
    <div className='app'>
      <LeftBar />
      <MiddlePanel />
      <RightBar />
    </div>
  );
}

export default App;
