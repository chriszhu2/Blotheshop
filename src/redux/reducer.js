import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import {CELEBRITIES} from '../shared/celebrities';
import {BOOKS} from '../shared/books';
import {CLOTHES} from '../shared/clothes';

export const initialState = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS, 
        leaders: LEADERS,
        celebrities: CELEBRITIES,
        books: BOOKS,
        clothes: CLOTHES
};

export const Reducer = (state = initialState, action) => { 
    //when reducer is first called by store, store has no state so it is uninitialized.SO, this is saying, if state is undefined, default state is initiaState
    return state;
};