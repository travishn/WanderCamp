json.key_format! camelize: :lower

# json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! '/api/bookings/booking', booking: booking
    end
  end
# end

# json.listingPhotos do
#   @bookings.each do |booking|
#     booking.listing.photos.each do |photo|
#       json.set! photo.id do
#         json.extract! photo, :listing_id, :img_url
#       end
#     end
#   end
# end


