Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'patches#static'
  get '/home' => 'patches#index'
  post '/addtocart' => 'line_items#create'
  patch '/order_info' => 'carts#update'
  get '/view_cart' => 'carts#show'
  get '/checkout/' => 'patches#static'
  get '/singleitem/:id' => 'patches#static'
  get '/thanks/' => 'patches#static'
  get '/payment/' => 'patches#static'
  get '/legal/' => 'patches#static'
  get '/shipping/' => 'patches#static'
  get '/contact/' => 'patches#static'
  get '/about/' => 'patches#static'


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
