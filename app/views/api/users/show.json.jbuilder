json.set! @user.id do
  json.partial! 'api/users/user', user: @user
end

json.set! bookings do
  @user.bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :listing_id, :guest_id, :start_date, :end_date, :num_guests
    end
  end
end

