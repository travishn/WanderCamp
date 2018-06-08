json.key_format! camelize: :lower

@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :description, :host_id, :photo_ids
  end
end