json.key_format! camelize: :lower

json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.partial! '/api/listings/listing', listing: listing
    end
  end
end

json.listingPhotos do
  @listings.each do |listing|
    listing.photos.each do |photo|
      json.set! photo.id do
        json.extract! photo, :id,:img_url
      end
    end
  end
end

