import { Routes, Route } from 'react-router-dom';
import App from './App';

export default function routes (){
    return (
        <Routes>
            <Route path="/" element={<App />}/>
        </Routes>
    );
}