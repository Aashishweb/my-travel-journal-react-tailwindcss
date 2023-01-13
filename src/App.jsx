import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "../data/data"


function App() {
 const cards= data.map(item=>{

  return (
    <Card 
        key={item.id}
        {...item}
    />
  )
 })

  return (
    <div>
        <Nav />
        <section>
            {cards}
        </section>
    </div>
  )
}

export default App
