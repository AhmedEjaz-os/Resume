import './App.css';
import HeaderApp from './components/HeaderApp.tsx';
import BodyApp from './components/BodyApp.tsx';
import FrontPageRole from './components/FrontPageRole.tsx';



function App() {
  return (
    <div className="App">
      <FrontPageRole />
      <HeaderApp />
      <BodyApp />
    </div>
  );
}

export default App;
