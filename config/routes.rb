Rails.application.routes.draw do
  root 'patches#static'
  get '/home' => 'patches#index'

  scope '/api' do
      get '/filter' => 'catagories#filter'
    resources :carts
    resources :line_items
    resources :users
    resources :patches
    resources :category
    resources :charges
  end


end
