class CacheKeysController < ApplicationController
  def index
    keys = Rails.cache.instance_variable_get("@data").keys
    render json: keys
  end

  def delete

  end
end
