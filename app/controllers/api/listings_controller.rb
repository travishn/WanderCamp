class Api::ListingsController < ApplicationController
  CITY_HASH = {
    "San Francisco": {northEast: {lat: 37.710532, lon:-122.477126}, southWest: {lat: 37.806838, lon: -122.405361}}
  }
  
  def index
    @listings = Listing.all.includes(:photos)
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def search
    @listings = Listing.in_bounds(CITY_HASH[params[:search]])

    if @listings
      render :index
    else
      render json: ['Please try another city']
    end
  end
end


