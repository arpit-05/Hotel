import React , {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,
    CardTitle} from 'reactstrap';



class DishDetail extends Component
{
    componentDidMount()
    {
        console.log("DishDetail component componentDidMount invoked")
    }
    componentDidUpdate()
    {
        console.log("DishDetail component componentDidUpdate invoked")
    }
    renderComments(comments)
    {
        
           const com=comments.map((comment)=>{
               return(
                   <li key={comment.id}>
                   <p>{comment.comment}</p>
                   <p>--{comment.author}
                   <br/>
                   &nbsp;
                   {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
               )
           })
           return(
               <div>
               <h4>Comments</h4>
               {com}</div>
           )
        }
        
    
        renderDish(dish){
            if(dish!=null)
              return(
                <Card>
                  <CardImg top src={dish.image} alt={dish.name}/>
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
      
                </Card>
              );
            
            else
              return(<div></div>)
  
          }

    render()
    {
        console.log("DishDetail component render invoked")
        const dish=this.props.dish
        if (dish==null)
        {
            return (<div></div>)
        }
        return(
            <div className="row">
                {this.renderDish(dish)}
                {this.renderComments(dish.comments)}
            </div>
        )
    }
}


export default DishDetail;

