Rails.application.routes.draw do
  # root controller: :locations, action: :index
  root "static_pages#root"

  resources :locations, only: %i[index show]
  resources :cache_keys, only: %i[index destroy]
end
