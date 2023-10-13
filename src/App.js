import './App.css';

function App() {
  return (
      <div>
        <div className='imgFundo'></div>
        <main>
          <header>
            <h1>Clover</h1>
            <nav>
              <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Produto</li>
                <li>Contato</li>
                <li>Login</li>
              </ul>
            </nav>
          </header>
          <article>
            <section>
              <h2>SUA PLATAFORMA<br/>DE ESTUDOS<br/>ORGANIZADA</h2>
              <span>Nossa plataforma coloca o<br/>conhecimento ao seu alcance,<br/> adpatando-se ao seu estilo de<br/>aprendizado</span>
            </section>
            <div className='btn'>
              <button className='button1'>Comece agora</button>
              <button className='button2'>Saiba mais!</button>
            </div>
          </article>
        </main>
      </div>
  );
}

export default App;
