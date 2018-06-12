json.key_format! camelize: :lower

json.listing do
  json.set! @listing.id do
    json.partial! '/api/listings/listing', listing: @listing
  end
end

json.listingPhotos do
  @listing.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :img_url
    end
  end
end

json.users do
  json.set! @listing.host.id do
    json.extract! @listing.host, :id, :username, :first_name,
      :last_name, :img_url
  end
end

json.bookings do
  @listing.bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :guest_id, :listing_id, :start_date,
        :end_date, :num_guests
    end
  end
end

json.reviews do
  @listing.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :listing_id, :author_id, :comment, :created_at
    end
  end
end