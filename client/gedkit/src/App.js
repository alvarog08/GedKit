import React, {useEffect, useState} from 'react'
import './App.css';
import GlobalPosition from './GlobalPosition/GlobalPosition';

function App() {

  const [backendData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackEndData(data)
      }
    )
  }, []) //Esto hace que solo se haga durante el primer renderizado del componente, es decir lo carga solo una vez, si quisiera cargarlo una segunda ya lo tendria en el backEndData

  return (
    <div>
      
      <GlobalPosition /> {/* Renderiza el nuevo componente */}


      {(typeof backendData.users === 'undefined') ? (
        <div className="loading-container">
          <p className="loading-text">Cargando...</p>
          <img src="/loadingPG.gif" alt="Loading..." className="loading-image" />
        </div>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App