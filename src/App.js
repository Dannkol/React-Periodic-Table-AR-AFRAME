import "./App.css";
import { AR } from "./Ar";
import { Home } from "./home";


function Routers(){
  let URLactual = window.location;

  if(URLactual.pathname === "/"){
    return <Home />
  }
  return <AR pat={URLactual.pathname} />

}



function App() {
  

  return (
    
      
        
        Routers()

    
      
    
  );
}

export default App;
