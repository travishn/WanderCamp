json.key_format! camelize: :lower

# json.set! @booking.id do
  json.partial! '/api/bookings/booking', booking: @booking
# end

#dont want to normalize here because we pass this data to the reducer on create/destroy
#in the thunk action creator for creating/deleting a booking, we need the actual booking object by itself
#not a key of its id pointing the object