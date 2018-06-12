json.key_format! camelize: :lower
json.extract! listing, :id, :title, :description, :host_id, :check_in, 
  :check_out, :cancellation_policy, :pets_allowed, :terrain, :price, 
  :capacity, :photo_ids

json.guestIds listing.bookings.pluck(:guest_id).uniq