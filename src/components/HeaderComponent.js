import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,

    Button, Modal, ModalHeader, ModalBody,

    Form, FormGroup, Input, Label } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import React, {Component} from "react";

import { Link } from 'react-router-dom'



class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false,
          isModalOpen:false
        };

        this.toggleModal=this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

     

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/blothes.png' height="30" width="41" alt='Blothes' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/books'><span className="fa fa-book fa-lg"></span> Books</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/clothes'><span className="fal fa-tshirt fa-lg"></span> Clothes</NavLink>
                                </NavItem>

                            

                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/messageboard'><span className="fa fa-address-card fa-lg"></span> Message Board</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-4">
                                <h1>Blothes shop</h1>
                                <p>Take a look at the various items that we sell! We have weekly sales on books and clothes! Others stores can't compare with our amazing deals and I guarantee you won't leave dissapointed!</p>
                            </div>
                            <div className = "col-12 col-sm-3 ">
                                <img src = 'assets/images/blothes.png' class = "img-fluid" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                innerRef={input => (this.username = input)}/> {/* innerref retrieves info from input */}
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input => (this.password = input)}/>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" name="remember" innerRef={input => (this.remember = input)}/> Remember me
                                </Label>
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;