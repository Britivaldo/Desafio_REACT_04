import { Routes, Route } from 'react-router-dom';
import App from './App';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';


export default function routes (){
    return (
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/contato" element={<Contato />}/>
            <Route path="/sobre" element={<Sobre />}/>
        </Routes>
    );
}