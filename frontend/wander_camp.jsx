import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {openModal} from './actions/modal_actions';
import { fetchListings } from './actions/listing_actions';
import { fetchUserBookings, receiveBookings } from './actions/booking_actions';
import { 
  fetchListingReviews, 
  receiveReviews, 
  receiveReview, 
  createListingReview 
} from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
  }

  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  // TEST START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.openModal = openModal;
  window.fetchListings = fetchListings;
  window.fetchUserBookings = fetchUserBookings;
  window.receiveBookings = receiveBookings;
  window.createListingReview = createListingReview;
  window.receiveReview = receiveReview;
  // TEST END


  ReactDOM.render(<Root store={store}/>, root);
});

