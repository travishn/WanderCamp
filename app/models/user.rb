# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  zipcode         :integer          not null
#  img_url         :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :username, :password_digest,
   :zipcode, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  before_validation :ensure_session_token, :ensure_img_url
  attr_reader :password

  has_many :bookings,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Booking

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def ensure_img_url
    # self.img_url ||= 'https://i.imgur.com/0mIFV1U.png'
    # credit:http://www.myrunningcostumes.com/costumes/russell
    self.img_url ||= "https://res.cloudinary.com/emanon/image/upload/v1528437705/guest.png"
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def self.find_by_credentials(username,password)
    @user = User.find_by(username: username)
    return nil if @user == nil
    @user.is_password?(password) ? @user : nil
  end
end
