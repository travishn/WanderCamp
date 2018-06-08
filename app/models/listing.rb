# == Schema Information
#
# Table name: listings
#
#  id                  :bigint(8)        not null, primary key
#  host_id             :integer          not null
#  title               :string           not null
#  description         :text             not null
#  check_in            :string           not null
#  check_out           :string           not null
#  cancellation_policy :string           not null
#  pets_allowed        :boolean          not null
#  terrain             :string           not null
#  price               :integer          not null
#  capacity            :integer          not null
#  type                :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Listing < ApplicationRecord
  validates :host_id, :title, :description, :check_in, :check_out, :cancellation_policy,
    :pets_allowed, :terrain, :price, :capacity, :type, presence: true
  before_validation :ensure_cancellation_policy, :ensure_type, :ensure_check_in_time,
    :ensure_check_out_time, :ensure_capacity

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User
    
  has_many :listing_activities,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :ListingActivity

  has_many :activities,
    through: :listing_activities,
    source: :activity
  
  has_many :photos,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :ListingPhoto
  
  has_many :reviews,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Review

  has_many :bookings,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Booking

  def ensure_check_in_time
    self.check_in ||= "After 3PM"
  end

  def ensure_check_out_time
    self.check_out ||= "Before 11AM"
  end

  def ensure_cancellation_policy
    self.cancellation_policy ||= "Flexible"
  end

  def ensure_type
    self.type ||= "camping"
  end

  def ensure_capacity
    self.capacity ||= 4
  end
end
