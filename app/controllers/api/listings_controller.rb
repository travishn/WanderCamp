class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all.includes(:photos)
    render :index
  end

  def show
  end
end
