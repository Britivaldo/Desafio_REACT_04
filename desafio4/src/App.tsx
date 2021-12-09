import { Link } from 'react-router-dom';
import './styles.css'

function App() {
  return (
    <div className='container' >
        <nav>
          <div className='nameTitle'>DevOne</div>
          <ul>
            <li><Link className='link' to="/contato">Contato</Link></li>
            <li><Link className='link' to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      <div className='content'>

        <p>
        Estilize sua estratégia de negócios
        </p>

      </div>
    </div>
  );
}

export default App;
