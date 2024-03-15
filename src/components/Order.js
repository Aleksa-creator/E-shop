import React, { Component } from 'react'
import { CiTrash } from "react-icons/ci"

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/" + this.props.item.img}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.price}$</p>
            <CiTrash className='delete-icon'/>
      </div>
    )
  }
}

export default Order
