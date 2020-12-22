import React, { Component } from 'react';
import{Navbar,NavbarBrand} from "reactstrap"
import {Switch, Route, Redirect,withRouter} from 'react-router-dom'
import Menu from './Menu'
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {PROMOTIONS} from '../shared/promotions'
import {LEADERS} from '../shared/leaders'
import Contact from './ContactComponent'
import About from './AboutComponent'
import {connect} from 'react-redux'
const mapStatetoProps=state =>{
    return{
        dishes:state.dishes,
        leaders:state.leaders,
        comments: state.comments,
        promotions: state.promotions
        
    }
}
class Main extends Component{
    constructor(props){
        super(props)
        
    }
    

render()
{
    
    const HomePage=()=>{
        return(
            
            <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
                  promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
                  leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
            />
        )
    }
    const DishWithId=({match})=>{
        return(
            <DishDetail dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
                        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
            />
        )
       
    }
    return(
        <div className="App">
      
          <Header/>
        
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/menu' component={()=> <Menu dishes={this.props.dishes}/>}/>
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact}/>
            <Route exact path='/aboutus' component={()=><About leaders={this.props.leaders}/>}/>
            <Redirect to='/home'/>
        </Switch>
        

        
           
            <Footer/>
        

    </div>
    )
    
}
}
export default withRouter(connect(mapStatetoProps)(Main))