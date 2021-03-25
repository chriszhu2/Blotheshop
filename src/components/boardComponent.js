import React, {Component, useState, useEffect} from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Form } from 'reactstrap';

class board extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          description: '',
          loading: true,
          posts: []
        }
    };

    componentDidMount() {
        const apiUrl = 'http://localhost:9000/messages';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('This is your data', data)
                this.setState({posts: data, loading: false})
                console.log(this.state.posts)
                console.log(this.state.loading)
        }) // retrieves whole data
        .catch(function (error) {
            console.log(error);
        })   
        // window.location.reload(false);
    }

    render() {
        // var postList = this.state.posts.map(post => <RenderMessages message={post}></RenderMessages>)
        // return (<div>
        //     {postList}
        // </div>);
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        if (this.state.posts.length === 0) {
            return <div>There aren't any posts !</div>
        }
        return(
            <ul className = "box">
            <div class = "card-body" className="col-12 col-md-5 m-1">
                <li> 
                    <div><strong>{this.state.matches.description}</strong></div>
                    {this.state.matches.name}
                </li>
            </div>
        </ul>
        );
    }

}

    function RenderMessages(props){
    // console.log(comments)
    return (
        <div class = "container">
            <div class = "col-12 col-sm-6">
                <ul className = "box">
                    <div class = "card-body" className="col-12 col-md-5 m-1">
                        <li> 
                            <div><strong>{props.message.description}</strong></div>
                            {props.message.name}
                        </li>
                    </div>
                </ul>
            </div>    
        </div>
    )};

const List = (props) => {
    const { texts } = props;
    if (!texts || texts.length === 0) return <p>No Messages, sorry</p>;
    return (
      <ul>
        <h2 className='list-head'>Available Public Repositories</h2>
        {texts.map((text) => {
          return (
            <ul className='box'>
              <div class = "card-body" className = "col-12 col-md-5 m-1">
                <li>
                    <div><strong>{props.text.name}</strong></div>
                    {props.text.description}
                </li>
              </div>
            </ul>
          );
        })}
      </ul>
    );
  };


const Messageboard = (props) => {

    
    
    const chats = props.messages.map((message) => {
        return (
            <div class = "containter">
                <div className= 'col-12 col-sm-6' >
                    <RenderMessages message={message} />
                </div>
                
            </div>
        );
    });



    return (
        <div className = "flex-container">
            <div class="float-child" col-12 col-sm-6>
                <h3> Send your Feedback!</h3>
                <p> Send a feedback to the right!</p>
                {chats}
                
                
            </div>
            <div class="float-child2">
                

                
                
            
                            
            </div>
        </div>
    );
}


export default board;
