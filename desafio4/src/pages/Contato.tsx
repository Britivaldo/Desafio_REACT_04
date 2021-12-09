import { Link } from 'react-router-dom';

function Contato() {
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
        Procure as nossas redes sociais
        </p>
        <span>@devone</span>

      </div>
    </div>
  );
}

export default Contato;
