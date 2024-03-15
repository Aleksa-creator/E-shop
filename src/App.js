import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Items from "./components/Items"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title:'Porsche 911',
          img: 'porsche 911.jpg',
          desc:'Lorem ipsum dolor sit amet',
          category:'luxury_car',
          price:'90500',
        },
        {
          id: 2,
          title:'McLaren 720s',
          img: 'mclaren 720s.jpg',
          desc:'Lorem ipsum dolor sit amet',
          category:'luxury_car',
          price:'254500',
        },
        {
          id: 3,
          title:'Aston Martin Valkyrie',
          img: 'aston martin valkyrie.jpg',
          desc:'Lorem ipsum dolor sit amet',
          category:'luxury_car',
          price:'3000000',
        },
        {
          id: 4,
          title:'Ford Mustang',
          img: 'ford mustang.jpg',
          desc:'Lorem ipsum dolor sit amet',
          category:'luxury car',
          price:'67560',
        },
        {
          id: 5,
          title:'BMW i8',
          img: 'bmw i8.jpg',
          desc:'Lorem ipsum dolor sit amet',
          category:'luxury_car',
          price:'62500',
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items  items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }
  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]} )
  }
}

export default App;
