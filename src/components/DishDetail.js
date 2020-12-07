import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,
    CardTitle} from 'reactstrap';


    
   function RenderComments({comments})
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
        if (dish==null)
        {
            return (<div></div>)
        }
        return(
            <div className="row">
                <RenderDish dish></RenderDish>
                <RenderComments comments={dish.comments}/>
            </div>
        )
    }



export default DishDetail;

