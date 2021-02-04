import React, { Component } from 'react';
import {Modal,Button,ModalHeader,ModalBody,Form, FormGroup,Label,Input,Nav,Row,NavItem,Col} from 'reactstrap'
import {Control,LocalForm,Errors} from 'react-redux-form'
const required= (val) => val && val.length;
  const maxLength=(len)=>(val)=>!(val) || (val.length<=len)
  const minLength=(len)=>(val)=>(val)&&(val.length>=len)
class Comment extends Component{
    
    constructor(props){
        super(props);
        this.state = {
           
            isModalOpen:false
          };
          
          this.toggleModal=this.toggleModal.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
      this.props.postComment(this.props.dishId,values.rating,values.name,values.comment)
    }
    toggleModal()
    {
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    render()
    {
        return(<React.Fragment>
            < Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                                </NavItem>
                            </Nav>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                        <Control.select model=".rating" id="rating" name="rating" placeholder="Rating"  className="form-control"  >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Control.select>
                        
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="name" md={2}>Your Name</Label>
                        <Col md={10}>
                        <Control.text model=".name" id="name" name="name" placeholder="Your Name" className="form-control" validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}>
                        
                        </Control.text>
                        <Errors
                                             className="text-danger"
                                             model=".name"
                                             show="touched"
                                             messages={{
                                                 required:"Required",minLength:'Must be greater than 2 characters',maxLength:"Must be 15 characters or less"
                                             }}
                                         />
                        </Col>
                    </Row>
                   <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comments</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        
                                        rows="6"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                   <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
            </React.Fragment>
            )

        
    }
}
export default Comment;