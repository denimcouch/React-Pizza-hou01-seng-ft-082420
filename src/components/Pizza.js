import React from "react"

const Pizza = ({pizza, editPizza}) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'yes' : 'no'}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e) => editPizza(pizza)} >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
