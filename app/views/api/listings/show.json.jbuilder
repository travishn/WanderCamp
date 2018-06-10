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