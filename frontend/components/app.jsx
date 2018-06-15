import React from 'react';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import ModalContainer from './modal/modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingContainer from './listings/listing_container';
import UserProfileContainer from './user/user_profile_container';
import HomeContainer from '../components/home/home_container';
import Footer from '../components/footer';
import { ProtectedRoute } from '../util/route_util';
import MapSearchContainer from './map/map_search_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  
  <main className='global-main'>
    <NavBarContainer />
    <ModalContainer />

    <Switch>
      <Route exact path="/listings/:listingId" component={ ListingContainer } />
      <ProtectedRoute exact path="/users/:userId" component={ UserProfileContainer } />
      <Route path="/discover" component={ MapSearchContainer } />
      <Route path="/" component={ HomeContainer } />
    </Switch>

    <Footer />
  </main>
);

export default App;