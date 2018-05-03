class CacheKeysController < ApplicationController
  def index
    keys = Rails.cache.instance_variable_get("@data").keys
    render json: keys
  end

  def delete_key
    key = params[:key]
    Rails.cache.delete(key)
    render json: key.to_json
  end
end
