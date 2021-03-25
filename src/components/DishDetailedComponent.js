import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Modal,
    ModalHeader,
    ModalBody,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Row,
    Col,
    Label, 
    FormGroup
  } from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";
import {Link} from 'react-router-dom';


const required = (val) => val && val.length; // checks to see if value is greater than 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          isModalOpen:false
        };

        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        
    }

     

    render() {
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil" /> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating" md = {12}>Rating</Label>
                                <Col md={{ size: 12 }}>
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        type = "select"
                                        id="rating"
                                        className="form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="author" md={12}> Your Name </Label>
                                <Col md={12}>
                                    < Control.text
                                        model=".author"
                                        id="author"
                                        name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                    required: "Required",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less"
                                    }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                            <Label htmlFor="comment" md={12}> Comment </Label>
                                <Col md={12}>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        rows={5}
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

    function RenderDish({ dish }) {
        return (
            <div className = "col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}){
        // console.log(comments)
        if (comments != null) 
        {
            const commentItem = comments.map((comment) => {
                return(
                    <li key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>

                    </li>
                );
            })
            return (
                <div className = "col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentItem}
                    </ul>
                    <CommentForm/>

                </div>
            );
        }
        else{
            return (<div></div>);
        }
    }
    

    const DishDetails = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className = 'row'>
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to ='/menu'>Menu</Link> </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                    <div className="row">
                            <RenderDish dish={props.dish} />
                            <RenderComments comments={props.comments} 
                            />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


export default DishDetails;