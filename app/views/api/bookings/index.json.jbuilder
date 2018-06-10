json.key_format! camelize: :lower

@bookings.each do |booking|
  json.set! booking.id do
    json.partial! '/api/bookings/booking', booking: booking
  end
end
