import React, { Component } from 'react';
import{Navbar,NavbarBrand} from "reactstrap"
import {Switch, Route, Redirect} from 'react-router-dom'
import Menu from './Menu'
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
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
    const HomePage=()=>{
        return(
            <Home/>
        )
    }
    return(
        <div className="App">
      
          <Header/>
        
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes}/>}/>
            <Redirect to='/home'/>
        </Switch>
        

        
           
            <Footer/>
        

    </div>
    )
    
}
}
export default Main