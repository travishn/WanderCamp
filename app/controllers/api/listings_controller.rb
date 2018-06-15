class Api::ListingsController < ApplicationController
  CITY_HASH = {
    "San Francisco": {northEast: {lat: 37.800273, lon:-122.409974}, southWest: {lat: 37.704918042928995, lon: -122.46325339987186}}
  }
  
  def index
    if params[:category]
      @listings = Listing.all.first(6)
      render :index
      # Change this to a different render jbuilder in the future for faster querying
    else
      @listings = Listing.all.includes(:photos)
      render :index
    end
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


