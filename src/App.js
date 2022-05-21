import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import data from './data'
import './Components/styles.css'
function App() {
  const mapout=data.map(item => {
    return <Card
      key={item.id}
      {...item} />
  })
  return (
    <div className="App">
     <NavBar/>
     {mapout}
    </div>
  );
}

export default App;
