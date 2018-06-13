export const fetchListingReviews = (listingId) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews`,
    data: { listingId }
  })
);

export const fetchListingReview = (reviewId) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${reviewId}`
  })
);

export const createListingReview = (review) => (
  $.ajax({
    method: 'POST',
    url: `/api/reviews`,
    data: { review }
  })
);

export const updateListingReview = (review) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteListingReview = (reviewId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
);
