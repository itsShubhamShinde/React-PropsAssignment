import './App.css';
import Poster from './component/Poster';
import posterss from './image/bg1.jpg'
import posterss1 from './image/bgtomb.jpg'
import post1 from './image/poster.jpg'
import post2 from './image/thomb.jpg'


function App() {
  return (
    <div className="App">
     <Poster bg={posterss} 
     hoding={post1} 
     moviName={"Bright"}
     year={"2017"}
     director={"David Ayer"}
     time={"117 min"}
     type={"Action, Crime, Fantasy"}
     details={"Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."}
     />
     <Poster bg={posterss1} 
     hoding={post2} 
     moviName={"Tomb Raider"}
     year={"2018"}
     director={"Roar Uthaug"}
     time={"125 min"}
     type={"Action, Fantasy"}
     details={"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."}
     />
    </div>
  );
}

export default App;
