Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :sessions, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
  end
end
