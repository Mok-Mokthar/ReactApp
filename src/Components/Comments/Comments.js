import { useState } from 'react';
import '../Comments/Comments.css';

function App() {

  const [listComPseudo, setListComPseudo] = useState([])

  const [pseudo, setPseudo] = useState("");
  const [commentaire, setCommentaire] = useState("");

  function generateId(){
    let carac = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";

    for (let i = 0; i < 20; i++) {
        let generate = carac[Math.floor(Math.random() * 64)];
        id += generate;
    }
    console.log(id);
    return id;
  }

  function handlePseudo(e){
    setPseudo(e.target.value);
  }

  function handleCommentaire(e){
    setCommentaire(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    const newCommentaire = {id: generateId(), pseudo: pseudo, commentaire: commentaire}
    setListComPseudo([...listComPseudo, newCommentaire])
    setPseudo("");
    setCommentaire("");
  }

  return (
    <body>
      <div className="container">
        <div className="menu">
          <form onSubmit={handleSubmit}>
            <p class="title" >Ajouter un commentaire</p>
            <input type="text" value={pseudo} onChange={handlePseudo} placeholder="pseudo" className="pseudo"/>
            <input type="text" value={commentaire} onChange={handleCommentaire} placeholder="commentaire" className="commentaire"/>
            <button type="submit" className="submit">Commenter</button>
          </form>
        </div>

        <div className="menu2">
          <div className="containerItem">
            <li className="nbcom">Nombre de commentaire {listComPseudo.length}</li>       
              <ul className="scrollContainer">
                <div className="scrollItem">
                  {listComPseudo.map(ComPseudo => (
                    <li className="listing">
                      <p className="ici">{ComPseudo.pseudo} : {ComPseudo.commentaire}</p>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
        </div>
      </div>
    </body>
  );
}

export default App;
