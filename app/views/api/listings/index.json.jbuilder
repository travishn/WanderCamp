@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :photo_ids
  end
end