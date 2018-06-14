export const fetchListings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/listings',
  })
);
 
export const fetchListing = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  })
);

export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: "/api/reviews"
  })
);

export const searchListings = (search) => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { search }
  })
);

