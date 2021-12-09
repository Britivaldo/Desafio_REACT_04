import { Link } from 'react-router-dom';

function Sobre() {
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
        Somos uma empresa especialista em estilização.
        </p>

      </div>
    </div>
  );
}

export default Sobre;
