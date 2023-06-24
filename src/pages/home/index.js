import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img
          src={background}
          className="background"
          alt="Git symbol background"
        />
        <div className="info">
          Eu sou... um teste
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Busca</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/84625141?v=4"
              className="profile"
              alt="profile"
            />
            <div>
              <h3>Raphael-Pauleschi</h3>
              <span>@raphael-pauleschi</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr/>
          <div>
            <h4>Repositórios</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
