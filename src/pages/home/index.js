import { useState } from "react";
import {Header} from "../../components/Header";
import backgroud from "../../assets/background.svg";
import {Input} from "../../components/Input"
import ItemList from "../../components/itemList";
import "./styles.css";

function App() {
	const [user, setUser] = useState('')
	const [currentuser, setCurrentUser] = useState(null)
	return (
		<div className="App">
			<Header></Header>
			<div className="conteudo">
				<img src={backgroud} className="background" alt="background app GitField"></img>
				<div className="informacoes">
					<div>
						<Input nama="usuario" value={user} onChange={event => setUser(event.target.value)}></Input>
					</div>
					<div className="perfil">
						<img src="https://avatars.githubusercontent.com/u/119496831?s=400&u=265c3e868a06ef21c13c521385134face68430d5&v=4" className="profile" alt="imagem de perfil">
						</img>
						<div className="inforUsuario">
							<h3>Lucas Ramalho Saraiva Dantas</h3>
							<span>@lucasdsra</span>
							<p>Descrição</p>
						</div>
					</div>
					<hr></hr>
					<div className="repositorios">
						<h4>Repositórios</h4>
						<ItemList title="teste" description="teste"></ItemList>

					</div>

				</div>
				
			</div>

		</div>
	);
}

export default App;
