class Api::ReviewsController < ApplicationController
  def index
    #need the if params[listingId]?
    @current_listing = Listing.find(params[:listingId])
    .includes(:author)

    if @current_listing
      @reviews = current_listing.reviews
    end

    render :index
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render :show
    else
      render :json ["Review doesn't exist"], status: 404
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:listing_id, :author_id, :comment)
  end
end
