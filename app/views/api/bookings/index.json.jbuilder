json.key_format! camelize: :lower

json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! '/api/bookings/booking', booking: booking
    end
  end
end

json.listingPhotos do
  @bookings.each do |booking|
    # booking.listing.photos.each do |photo|
    #   json.set! photo.listing_id do
    #     json.extract! photo, :listing_id, :img_url
    #   end
    # end
    # Only want the first photo since we're using listing_id to target

    json.set! booking.listing.photos[0].listing_id do
      json.extract! booking.listing.photos[0], :id, :listing_id, :img_url
    end
  end
end


