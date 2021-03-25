import React, {Component, useState, useEffect} from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Form } from 'reactstrap';
import axios from 'axios';
import Axios from 'axios';
import board from './boardComponent';
import WithListLoading from './withListLoading';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      loading: true,
      posts: []
    
    };
    // this.handleMessageInput = this.handleMessageInput.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
 }


//   initial() {
//     const ListLoading = WithListLoading(board);
//     const [appState, setAppState] = useState({
//       loading: false,
//       repos: null,
//     });
//   }

componentDidMount() {
    const apiUrl = 'http://localhost:9000/messages';
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('This is your data', data)
            this.setState({posts: data, loading: false})
            console.log("this is posts ",  this.state.posts)
            console.log(this.state.loading)
    }) // retrieves whole data
    .catch(function (error) {
        console.log(error);
    })   
    // window.location.reload(false);
}


//   getMessages() {
//     axios.get('http://localhost:9000/create') 
//         .then((response) => {
//             const data = response.data;
//             console.log(data);
//             this.setState({posts: data});
//             console.log(data + "data has been recieved");
//         })
//         .catch(() => {
//             alert('error :(');
//         });
//   }


//   handleMessageInput(event) {
//     this.setState({ 
//         // Computed property names 
//         // keys of the objects are computed dynamically 
//         [event.target.name] : event.target.value //dynamically updates object property
//     }) 
//   }

    onChangeName(e) {
        this.setState({ name: e.target.value })
        
    }

    onChangeMessage(e) {
        this.setState({ description: e.target.value })
        
    }


  handleSubmitMessage(event) {
    event.preventDefault()
    console.log('starting to submit profile');
    const { name, description } = this.state 
    alert(` 
      ____Your Details____\n 
      Name : ${name} 
      Description : ${description} 
      `);
      console.log("posts array is ", this.state.posts);
      console.log("posts array is ", this.state.posts.description); // result is undefined



    const mess = {
        name,
        description
      };

    // const userObject = {
    //     name: this.state.name,
    //     message: this.state.message
    // };

    axios
      .post('http://localhost:9000/create', mess)
      .then(() => console.log('Message Created'))
      .catch(err => {
        console.error(err);
      });
     
  }

  render() {
    if (this.state.loading) {
        return <div>Loading...</div>
    }
    if (this.state.posts.length === 0) {
        return <div>There aren't any posts !</div>
    }

    const chats = this.state.posts.map((post) => {
        return (
            <div class = "containter">
                <div>
                    <ul className = "box">
                        <div class = "card-body" className="col-12 col-md-5 m-1">
                            <li> 
                                <div><strong>{post.description}</strong></div>
                                {post.name}
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        );
    });

    return (
      <div className = "flex-container">
            <div class="float-child" col-12 col-sm-6>
                <h3> Send your Feedback!</h3>
                <p> We would love to hear what you have to say!</p>
                {chats}   
            </div>


        <div class = 'col-12 col-md-6'>
          <h3> Send a Message! </h3>
          <form onSubmit={this.handleSubmitMessage}>
            <div>
                <input
                type="text"
                name = 'name'
                onChange={this.onChangeName}
                value={this.state.name}
                placeholder = "Enter your name!"
                />
            </div>

            <div>
                <input 
                type="text"
                name = 'description'
                onChange={this.onChangeMessage}
                value={this.state.message} 
                placeholder = "enter your message!"
                />
            </div>

            <Button type="submit" color="primary" value = "Submit">
                Send Feedback!
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Message;




//     function RenderMessages({message}){
//         // console.log(comments)
//         return (
//             <div class = "container">
//                 <div class = "col-12 col-sm-6">
//                     <ul className = "box">
//                         <div class = "card-body" className="col-12 col-md-5 m-1">
//                             <li> 
//                                 <div><strong>{message.description}</strong></div>
//                                 {message.name}
//                             </li>
//                         </div>
//                     </ul>
//                 </div>    
//             </div>
//         );
//     }

    // const List = (props) => {
    //     const { repos } = props;
    //     if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    //     return (
    //       <ul>
    //         <h2 className='list-head'>Available Public Repositories</h2>
    //         {repos.map((repo) => {
    //           return (
    //             <li key={repo.id} className='list'>
    //               <span className='repo-text'>{repo.name} </span>
    //               <span className='repo-description'>{repo.description}</span>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     );
    //   };
    

//     const Messageboard = (props) => {

        
        
//         const chats = props.messages.map((message) => {
//             return (
//                 <div class = "containter">
//                     <div className= 'col-12 col-sm-6' >
//                         <RenderMessages message={message} />
//                     </div>
                    
//                 </div>
//             );
//         });


// // componentDidMount() {
// //     const apiUrl = 'http://localhost:9000/messages';
// //     fetch(apiUrl)
// //       .then((response) => response.json())
// //       .then((data) => {
// //           console.log('This is your data', data)
// //           this.setState({posts: data})
// //           console.log(this.state.posts)
// //     }) // retrieves whole data
      

// //     // window.location.reload(false);
// // }

//         return (
//             <div className = "flex-container">
//                 <div class="float-child" col-12 col-sm-6>
//                     <h3> Send your Feedback!</h3>
//                     <p> Send a feedback to the right!</p>
//                     {chats}
                    
                    
//                 </div>
//                 <div class="float-child2">
                    

//                     <Message/>
                    
                
                                
//                 </div>
//             </div>
//         );
//     }


// export default Messageboard;

