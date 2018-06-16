# WanderCamp

[WanderCamp Live](https://wandercamp.herokuapp.com/)

WanderCamp is a full-stack web application inspired by HipCamp. The application allows users to book unique 
experiences all over the world to satisfy their wanderlust. 

WanderCamp is built on Ruby on Rails and is managed with a PostgreSQL database. It utilizes React and Redux
architecture for the frontend. The application was built within a two-week timeframe, though 
I plan to continue making improvements over time.

## Features
### Search
![index](https://res.cloudinary.com/emanon/image/upload/v1529101340/Screen_Shot_2018-06-15_at_3.19.34_PM.png)
* Users can search for listings based on their location using the search bar
* For ease of finding specific listings, users can also utilize provided filters
* Users can search by clicking on a specific image on the home and discover page 

### Bookings
![index](https://res.cloudinary.com/emanon/image/upload/v1529101899/Screen_Shot_2018-06-15_at_3.30.37_PM.png)
* Users can book a listing through the booking form located inside each listing
* The login modal is opened upon a booking attempt for users who are not logged in
* Users can only book up to the capacity that each listing specifies

### Reviews
![index](https://res.cloudinary.com/emanon/image/upload/v1529103018/Screen_Shot_2018-06-15_at_3.48.14_PM.png)
* Users can only create reviews for listings that they have previously booked
* Users who are not logged in are restricted from creating a review
* Reviews can be updated and deleted based on whether the review belongs to the user


## Code Highlights
### Modal Display

```javascript
class Modal extends React.Component {
  render() {
    const { modal, closeModal } = this.props;
    if (!modal) return null;
    let component;

    switch(modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignUpFormContainer />;
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}
```

### Edit Form and Review Toggle
```javascript
  handleSubmit() {
    this.props.searchListings(this.state.search)
      .then(this.props.history.push('/discover'));
  }
```

```ruby
  def self.in_bounds(bounds) 
    self.where('lat < ?', bounds[:northEast][:lat])
      .where('lat > ?', bounds[:southWest][:lat])
      .where('lon < ?', bounds[:northEast][:lon])
      .where('lon > ?', bounds[:southWest][:lon])
  end
```
```ruby
def search
    bounds = CITY_HASH[params[:search].to_sym]
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all.includes(:photos)

    if @listings
      render :index
    else
      render json: ['Please try another city']
    end
  end
```

## Technologies
 * Ruby on Rails
 * React
 * Redux
 * jQuery
 * jBuilder
 * BCrypt
 
## Future Additions
* Implement photo slider utilizing react carousel slick for listings
* Implement more interactive google map api
* Implement booking form that slides with browser