json.key_format! camelize: :lower

json.listing do
  json.partial! '/api/listings/listing', listing: @listing
end

json.listing listingPhotos do
  @listing.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :img_url
    end
  end
end