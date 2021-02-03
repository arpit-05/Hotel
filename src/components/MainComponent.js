import React, { Component } from 'react';

import {Switch, Route, Redirect,withRouter} from 'react-router-dom'
import Menu from './Menu'
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'

import Contact from './ContactComponent'
import About from './AboutComponent'
import {connect} from 'react-redux'
import { add_comment, fetchComments, fetchDishes, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }
  const mapDispatchToProps = dispatch => ({

    add_comment: (dishId, rating, author, comment) => dispatch(add_comment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments:()=>dispatch(fetchComments()),
    fetchPromos:()=>dispatch(fetchPromos())
  });

  class Main extends Component {

    constructor(props) {
      super(props);
    }
  
    componentDidMount(){
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
    }

render()
{
    
    const HomePage=()=>{
        return(
            
            <Home  dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                   dishesLoading={this.props.dishes.isLoading} 
                  dishesErrMess={this.props.dishes.errMess}
                  promotion={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
                  promoLoading={this.props.promotions.isLoading}
                  promoErrMess={this.props.promotions.errmess}
                  leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                  
            />
        )
    }
    const DishWithId=({match})=>{
        return(
            <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
                        isLoading={this.props.dishes.isLoading}
                        errmsg={this.props.dishes.errMess}
                        comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
                        commentsErrMess={this.props.comments.errmess}
                        add_comment={this.props.add_comment}
                        
                        
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
            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
            <Route exact path='/aboutus' component={()=><About leaders={this.props.leaders}/>}/>
            <Redirect to='/home'/>
        </Switch>
        

        
           
            <Footer/>
        

    </div>
    )
    
}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))