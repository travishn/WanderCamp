import React from 'react';
import merge from 'lodash/merge';

class ReviewsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, review: {
      id: props.review.id, listing_id: props.currentListing.id, 
      author_id: props.currentUser.id, comment: props.review.comment
      } 
    };
  }

  toggleEdit() {
    this.setState( {selected: !this.state.selected} );
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.updateReview(this.state.review)
    .then(() => this.setState({ selected: !this.state.selected }));
  }

  handleChange(e) {
    e.preventDefault();
    const currentReview = merge({}, this.state.review);
    currentReview.comment = e.target.value;
    this.setState({ review: currentReview});
  }

  renderEditForm() {
    const {review} = this.state;

    return (
    <div className = "review-form-box" >
      <div className="review-form">

        <div className="edit-form-container">
          <form className="review-edit-form">
            <textarea
              value={review.comment}
              placeholder="Share your wanderlust experience with others!"
              onChange={(e) => this.handleChange(e)}
            />
          </form>

          <div className="edit-button-options">
            <button onClick={(e) => this.handleSubmit(e)} className="btn-option">Update Review</button>
            <button className="btn-option" onClick={() => this.toggleEdit()}>Cancel</button>
          </div>
        </div>

        
      </div>
    </div>
    );
  }

  renderReview() {
    const { review } = this.props;
    return (
      <div className="review-item-container">
        <img className="index-item-reviewer" src={review.author.img_url} />

        <div className="review-description">
          <div className="author-container">
            <div className="author">{review.author.first_name}</div>
            {this.renderButtonOptions()}
          </div>
          <div className="date">{review.createdAt}</div>
          <p>{review.comment}</p>
        </div>
      </div>
    );
  }

  renderButtonOptions() {
    const { currentUser, review, deleteReview } =this.props;
    if (!currentUser) return null;
  
    if (currentUser.id === review.authorId) {
      return (
        <div className="button-options">
          <button className="btn-option" onClick={() => this.toggleEdit()}>Edit Review</button>
          <button className="btn-option" onClick={() => deleteReview(review.id)}>Delete Review</button>
        </div>
      );
    }
  }

  render() {
    const { review } = this.props;
    if (this.state.selected) {
      return (
        <div>
          {this.renderEditForm()}
        </div>
      );
    } else {
      return (
        <div>
          {this.renderReview()}
        </div>
      );
    }
  }
}

// const ReviewsIndexItem = ({review, deleteReview}) => {
//   return (
//     <div className="review-item-container">
//       <img className="index-item-reviewer" src={review.author.img_url}/>
      
//       <div className="review-description">
//         <div className="author-container">
//           <div className="author">{review.author.first_name}</div>
//           <button onClick={() => deleteReview(review.id)}>Delete Review</button>
//         </div>
//         <div className="date">{review.createdAt}</div>
//         <p>{review.comment}</p>
//       </div>
//     </div>
//   );
// };

export default ReviewsIndexItem;