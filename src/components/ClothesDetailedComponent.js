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
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
//const address = (val) => ^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$/i.test(val);

class ClothesForm extends Component {

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
        // alert("Current State is: " + JSON.stringify(values)); //user sees form has been submitted
        alert("Your order is on the way!")
    }

     

    render() {
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-shopping-cart" /> Add to Cart
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Shopping Cart</ModalHeader>
                    
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
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
                                <Label htmlFor="author" md={12}> Email </Label>
                                <Col md={12}>
                                    < Control.text
                                        model=".email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                        required,
                                        validEmail
                                        }}
                                    />
                                     <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="address" md={12}> Address </Label>
                                <Col md={12}>
                                    < Control.text
                                        model=".address"
                                        id="address"
                                        name="address"
                                        placeholder="Address"
                                        className="form-control"
                                        validators={{
                                        required,
                                        minLength: minLength(4),
                                        
                                        }}
                                    />
                                     <Errors
                                        className="text-danger"
                                        model=".address"
                                        show="touched"
                                        messages={{
                                            minLength: "Must be greater than 3 characters",
                                           
                                        }}
                                     />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="creditcard" md={12}> Credit Card </Label>
                                <Col md={12}>
                                    < Control.text
                                        model=".creditcard"
                                        id="creditcard"
                                        name="creditcard"
                                        placeholder="Credit Card"
                                        className="form-control"
                                        validators={{
                                        required,
                                        minLength: minLength(16)
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".creditcard"
                                    show="touched"
                                    messages={{
                                    required: "Required",
                                    minLength: "Must be 16 characters"
                                    }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="cvc" md={12}> CVC </Label>
                                <Col md={12}>
                                    < Control.text
                                        model=".cvc"
                                        id="cvc"
                                        name="cvc"
                                        placeholder="CVC"
                                        className="form-control"
                                        validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(3)
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".cvc"
                                    show="touched"
                                    messages={{
                                    required: "Required",
                                    minLength: "Must be 3 numbers",
                                    maxLength: "Must be 3 numbers "
                                    }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="exp" md={12}> Expiration Date </Label>
                                <Col md={12}>
                                    < Control.text
                                        model=".exp"
                                        id="exp"
                                        name="exp"
                                        placeholder="Expiration Date"
                                        className="form-control"
                                        validators={{
                                        required,
                                        minLength: minLength(4),
                                        maxLength: maxLength(4)
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".exp"
                                    show="touched"
                                    messages={{
                                    required: "Required"
                                    }}
                                    />
                                </Col>
                            </FormGroup>


                            <Button type="submit" value="submit" color="primary" outline onClick={this.handleSubmit}>
                                Checkout
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

    function RenderClothes({ clothe }) {
        return (
            <div className = "col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={clothe.image} alt={clothe.name} />
                </Card>
            </div>
        );
    }

    function RenderComments({comments, clothe}){
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
                    <h2>Description</h2>
                    
                    <ul className="list-unstyled">
                        <CardBody>
                            <CardText>{clothe.description}</CardText>
                        </CardBody>
                    </ul>
                    
                    <ClothesForm />
                    
                </div>
            );
        }
        else{
            return (<div></div>);
        }
    }

    const ClothesDetails = (props) => {
         if (props.clothe != null) {
            return (
                <div className="container">
                    <div className = 'row'>
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to ='/clothes'>Clothes</Link> </BreadcrumbItem>
                            <BreadcrumbItem active>{props.clothe.name}Clothes</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.clothe.name}</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                            <RenderClothes clothe={props.clothe} />
                            <RenderComments comments = {props.comments}
                            clothe = {props.clothe}
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


export default ClothesDetails;