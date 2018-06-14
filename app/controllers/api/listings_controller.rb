class Api::ListingsController < ApplicationController
  CITY_HASH = {
    "San Francisco": {northEast: {lat: 37.800273, lon:-122.409974}, southWest: {lat: 37.704918042928995, lon: -122.46325339987186}}
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
    bounds = CITY_HASH[params[:search].to_sym]
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all.includes(:photos)

    if @listings
      render :index
    else
      render json: ['Please try another city']
    end
  end
end


