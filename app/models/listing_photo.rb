# == Schema Information
#
# Table name: listing_photos
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  img_url    :string           not null
#

class ListingPhoto < ApplicationRecord
  validates :listing_id, :img_url, presence: true
  belongs_to :listing
  
end
