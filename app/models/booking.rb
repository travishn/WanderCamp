# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  guest_id   :integer          not null
#  num_guests :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#

class Booking < ApplicationRecord
  validates :listing_id, :guest_id, :start_date, :end_date, :num_guests, presence: true
  before_validation :ensure_num_guests
  belongs_to :listing

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User
    
  def ensure_num_guests
    self.num_guests ||= 1
  end
end