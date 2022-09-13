import React, {useState, useRef, useEffect} from 'react';
import Card from './components/Card';


function App() {


  //// ICI POUR IMAGINER L ARRIVÉE DE DONNEES D UNE API
  const [cardsData, setCardsData] = useState([
    {
      title: "Picasso",
      content: "Peintre XXème",
      id: 1
    },
    {
      title: "Van Gogh",
      content: "Peintre XIXème",
      id: 2
    }
  ])

  const btnRef = useRef(null)
 
  useEffect(() => {
    console.log(btnRef);

    const handleResize = (e : Event) => {
      console.log("resized!", e);
      
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize',handleResize)
    }
    }, [])

  return (
    <div className="App">
      {cardsData.map((item) => (
        /// !!!!!!! ici si on met {} au lieu de (), il faut ajouter un return devant Card !!!!!!!!!!!
        <Card key={item.id} title={item.title} content={item.content}/>
      ))}
      {/* <Card title="La carte" content="le contenu"/> */}
      <button ref={btnRef}>Submit</button>
    </div>
  );
}

export default App;
