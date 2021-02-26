import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const baseURL = "http://localhost:3000/pizzas/";

class App extends Component {
  state = {
    pizzas: [],
    pizza: {
      id: null,
      topping: "",
      size: "",
      vegetarian: null,
    },
  };

  componentDidMount() {
    fetch(baseURL)
      .then((res) => res.json())
      .then((pizzas) => {
        this.setState({
          pizzas: pizzas,
        });
      });
  }

  editPizza = (pizza) => {
    console.log("editPizza", pizza);
    this.setState({
      pizza: {
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian,
      },
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    console.log("handleChange", name, value);
    if (name === "topping") {
      this.setState({
        pizza: {
          id: this.state.pizza.id,
          topping: value,
          size: this.state.pizza.size,
          vegetarian: this.state.pizza.vegetarian,
        },
      });
    } else if (name === "size") {
      this.setState({
        pizza: {
          id: this.state.pizza.id,
          topping: this.state.pizza.topping,
          size: value,
          vegetarian: this.state.pizza.vegetarian,
        },
      });
    } else if (name === "vegetarian") {
      this.setState({
        pizza: {
          id: this.state.pizza.id,
          topping: this.state.pizza.topping,
          size: this.state.pizza.size,
          vegetarian: value === "Vegetarian" ? true : false,
        },
      });
    }
  };

  savePizza = (pizza) => {
    const pizzaForm = document.getElementById("pizza-form");
    let pizzaOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state.pizza),
    };
    fetch(baseURL + pizza.id, pizzaOptions)
      .then((res) => res.json())
      .then((editedPizza) => {
        this.setState({
          pizzas: this.state.pizzas.map((pizza) =>
            pizza.id === editedPizza.id ? editedPizza : pizza
          ),
        });
      });
    this.state.pizza = this.setState({
      pizza: {
        id: null,
        topping: "",
        size: "",
        vegetarian: null,
      },
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.pizza}
          handleChange={this.handleChange}
          savePizza={this.savePizza}
        />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
