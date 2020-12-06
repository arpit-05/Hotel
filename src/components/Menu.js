import React, { Component } from 'react';
import {CardTitle} from 'reactstrap'
import {Card, CardImg, CardImgOverlay, CardText,CardBody} from 'reactstrap'
import DishDetail from './DishDetail'
class Menu extends Component{
    constructor(props){
        super(props)
        console.log("Menu component constructor invoked")
        
    }
    componentDidMount()
    {
      console.log("Menu component componentDidMount invoked")
    }
    
    
    render() {
      console.log("Menu component render invoked")
      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => this.props.onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });
        return(
            <div className='container'>
            <div className="row">
                
                    {menu}
               
            </div>
            
            </div>
        )
    }
}
export default Menu;