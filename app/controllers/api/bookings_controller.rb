class Api::BookingsController < ApplicationController
  def index
    @user = User.find(params[:userId])
    if @user
       @bookings = @user.bookings
      #  .order(:start_date)
       render :index
    else
      render json: ["User not found"], status: 404
    end
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])

    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:listing_id, :guest_id, :start_date, :end_date, :num_guests)
  end
end
