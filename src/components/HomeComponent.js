import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from "./LoadingComponent";

function RenderCard({item,isLoading,errmsg})
{
    
    if(isLoading){
        return(
            <Loading/>
        )
    }
    else if(errmsg){
        return(<h4>
            {errmsg}
        </h4>)
    }
    else 
    
return(
    <Card>
        <CardImg src={item.image} alt={item.name}> 
        </CardImg>
        <CardBody>
<CardTitle>{item.name}</CardTitle>
{item.designation?<CardSubtitle>{item.designation}</CardSubtitle>: null }
<CardText>{item.description}</CardText>
        </CardBody>
    </Card>
)
}
function Home(props)
{
    console.log(props.dishesLoading)
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errmsg={props.dishesErrMess}/>
        </div>
        <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
        </div>
        <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
        </div>
        </div>
        </div>
    )
}
export default Home;