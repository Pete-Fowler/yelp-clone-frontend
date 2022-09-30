import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<div/>}/>
        <Route path="/login" element={<div/>}/>

        <Route path="/businesses" element={<div/>}/>
        <Route path="/business" element={<div/>}/>
      </Routes>
    </div>
  );
}

export default App;
