class LocationsController < ApplicationController
  def index
    @locations = MetaWeather.new(params).search if params[:query]
    render template: "locations/index.json.jbuilder"
  end

  def show
    @location = MetaWeather.new(params).location_data
    render template: "locations/show.json.jbuilder"
  end
end
