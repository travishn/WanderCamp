class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all.includes(:photos)
    render :index
  end

  def show
    @listing = Listing.find(params[:id]).includes(:photos)
    render :show
  end
end


