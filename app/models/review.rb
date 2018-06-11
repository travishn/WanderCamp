# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  author_id  :integer          not null
#  comment    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :listing_id, :author_id, :comment, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing
end
