import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <Navbar/>
      <div className="card">
        <Cards t="card1"  d="desc of card 1"/>
        <Cards t="card2"  d="desc of card 2"/>
        <Cards t="card3"  d="desc of card 3"/>
        <Cards t="card4"  d="desc of card 4"/>
      </div>
      <Footer/>
    </>
  )
}

export default App