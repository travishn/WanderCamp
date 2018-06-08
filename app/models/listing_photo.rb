class ListingPhoto < ApplicationRecord
  validates :listing_id, :img_url, presence: true
  belongs_to :listing
  
end
