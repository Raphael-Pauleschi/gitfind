import { Header } from "../../components/Header";
import background from '../../assets/background.png'
import './styles.css'

function App() {
  return( 

   <div className="App">
  <Header/>
  <div className="conteudo">
    <img src={background} className="background" alt="Git symbol background"/>
    <div className="info">
      Eu sou... um teste
      <div>
        <input name="usuario" placeholder="@username"/>
        <button>Busca</button>
      </div>
      </div>
  </div>
  </div>

 
  );
}

export default App;
