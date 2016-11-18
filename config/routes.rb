Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'patches#static'
  get '/home' => 'patches#index'
  post '/addtocart' => 'line_items#create'
  patch '/order_info' => 'carts#update'
  get '/view_cart' => 'carts#show'

  scope '/api' do
      get '/filter' => 'catagories#filter'
    resources :carts
    resources :line_items
    resources :users
    resources :patches
    resources :category
    resources :charges, only: [:create]
  end


end
