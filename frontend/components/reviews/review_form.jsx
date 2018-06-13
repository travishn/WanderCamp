import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
  }
  
  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { currentListing, currentUser } = this.props;
    this.props.createListingReview(this.state)
      // .then( (review) => this.props.fetchListingReview(review.id))
      .then( () => this.setState( {listing_id: currentListing.id, 
        guest_id: currentUser.id, comment: ''}));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderReviewerInfo() {
    const { currentUser } = this.props;

    return (
      <div className="reviewer-info">
        {/* <img src={currentUser.imgUrl} /> */}
        {/* <h5>{currentUser.firstName}</h5> */}
        <h5>Share your wanderlust experiences!</h5>
      </div>
    );
  }

  renderReviewForm() {
    const { formType } = this.props;
    return (
      <div className="review-form-box">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <textarea
            value={this.state.comment}
            placeholder="Share your wanderlust experience with others!"
            required
            onChange={this.handleChange('comment')}
          />
        </form>
        
        <button className="btn-option">{formType}</button>
      </div>
    );
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser == null) return null;

    return (
      <section className="review-form-container">
        {this.renderReviewerInfo()}
        {this.renderReviewForm()}
      </section>
    );
  }
}

export default ReviewForm;