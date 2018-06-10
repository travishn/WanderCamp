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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
