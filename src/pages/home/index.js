import {Header} from "../../components/Header";
import backgroud from "../../assets/background.svg";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="conteudo">
        <img src={backgroud} className="background" alt="background app GitField"></img>
        <div className="informacoes">
          <div>
            <input name="usuario" placeholder="@username"></input>
            <button>Buscar</button>
          </div>
          <div className="imgPerfil">
            <img src="https://avatars.githubusercontent.com/u/119496831?s=400&u=265c3e868a06ef21c13c521385134face68430d5&v=4" className="profile" alt="imagem de perfil"></img>
          </div>
          <div>
            <h3>Lucas Ramalho Saraiva Dantas</h3>
            <p>Descrição</p>
          </div>
      
        </div>
      </div>

    </div>
  );
}

export default App;
