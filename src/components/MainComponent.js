import React, { Component } from 'react';
import{Navbar,NavbarBrand} from "reactstrap"
import Menu from './Menu'
import DishDetail from './DishDetail'
import {DISHES} from '../shared/dishes'
class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            dishes:DISHES,
            selectedDish:null
        }
    }
    onDishSelect(dishId)
    {
      this.setState({selectedDish:dishId})
    }

render()
{
    return(
        <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId)=>{this.onDishSelect(dishId)}}/>
        <div className="row">
            
            
        <div className="col-12 col-md-5 m-1">

        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>  </div>
        

    </div>
    )
    
}
}
export default Main