import React, { Component } from 'react';
import Books from './BooksComponent';
import Clothes from './ClothesComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetails from './DishDetailedComponent';
import BookDetails from './BookDetailedComponent';
import ClothesDetails from './ClothesDetailedComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutUsComponent';
import Signup from './SignupComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import board from './messageBoardComponent';
import Messageboard from './messageBoardComponent';
import { CELEBRITIES } from '../shared/celebrities';
import { DISHES } from '../shared/dishes'
import { BOOKS } from '../shared/books'
import { CLOTHES } from '../shared/clothes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { MESSAGES } from '../shared/messages'
import { PROMOTIONS } from '../shared/promotions'


// const mapStateToProps = state => {
//      return { // will map redux stores state into props that will become availble to my component
//         //state is from redux store's state
//         dishes: state.dishes,
//         comments: state.comments,
//         promotions: state.promotions,
//         leaders: state.leaders,
//         celebrities: state.celebrities,
//         books: state.books,
//         clothes: state.clothes
//      } 
// }


class Main extends Component {
  // looks like html code but is composed of react elements
  constructor(props) { //lifting state up
    super(props);
    this.state = { 
      dishes: DISHES,
      celebrities: CELEBRITIES,
      clothes: CLOTHES,
      comments: COMMENTS,
      books: BOOKS,
      leaders: LEADERS,
      messages: MESSAGES,
      promotions: PROMOTIONS,
      
    };
  }






  render() {

    const HomePage = () => {
        return (
          <Home 
            celeb1= {this.state.celebrities.filter((celeb) => celeb.featured)[0]}
            celeb2= {this.state.celebrities.filter((celeb) => celeb.featured) [1]}
            celeb3= {this.state.celebrities.filter((celeb) => celeb.featured) [2]}
          />  
        );
    }

    const DishWithId = ({match}) => {
        return(
            <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} //string converted to base 10 integer
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };

    const BookWithId = ({match}) => {
        return(
            <BookDetails book={this.state.books.filter((book) => book.id === parseInt(match.params.bookId,10))[0]}
              comments={this.state.comments.filter((comment) => comment.bookId === parseInt(match.params.bookId,10))} //string converted to base 10 integer
           />
        );
      };

      const ClothesWithId = ({match}) => {
        return(
            <ClothesDetails clothe={this.state.clothes.filter((clothe) => clothe.id === parseInt(match.params.clotheId,10))[0]}
              comments={this.state.comments.filter((comment) => comment.clotheId === parseInt(match.params.clotheId,10))} //string converted to base 10 integer
           />
        );
      };

    return (
      <div>
        <Header />
        <messageBoardComponent/>
        <footer />

        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path = "/books" component={() => <Books books={this.state.books} />}/> 
            <Route path = "/books/:bookId" component = {BookWithId} />
            <Route exact path = "/clothes" component={() => <Clothes clothes={this.state.clothes} />}/> 
            <Route path = "/clothes/:clotheId" component = {ClothesWithId} />
            {/* must pass in a function component if you want to use additional props and attribtues  */}
            <Route exact path = "/contactus" component = {Contact}></Route>
            <Route exact path = "/messageboard" component={() => <Messageboard messages={this.state.messages} />}/> 
            <Redirect to = "/home" />
        </Switch>
        
        <Footer />
        
      </div>
    );
  }
}

export default Main;
