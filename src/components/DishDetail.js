import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import Comment from './CommentForm'
import { Loading } from './LoadingComponent'

    
   function RenderComments({comments,add_comments,dishId})
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
               {com}
               <Comment addComment={add_comments} dishId={dishId}></Comment>
               </div>
               
           )
        }
        
    
        function RenderDish({dish}){
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

    
        
        const DishDetail=(props)=>{
            const dish=props.dish
        if (props.isLoading)
        {
            return (<div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>)
        }
        else if(props.errmsg)
        {
            return(<div className='container'>
                <div className='row'>
                    <h4>{props.errmsg}</h4>
                </div>
            </div>)
        }
        else if(dish!=null)
        {
        return(
          <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                                        add_comments={props.add_comments}
                                        dishId={dish.id} />
                        
                    </div>
                </div>
                </div>
        )
    }
}



export default DishDetail;

