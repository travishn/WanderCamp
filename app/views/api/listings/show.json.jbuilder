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

json.host do
  json.set! @listing.host.id do
    json.extract! @listing.host, :id, :username, :first_name,
      :last_name, :img_url
  end
end
