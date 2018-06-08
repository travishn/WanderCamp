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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
