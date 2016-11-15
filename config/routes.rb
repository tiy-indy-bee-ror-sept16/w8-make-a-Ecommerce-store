Rails.application.routes.draw do
  resources :carts
  root 'patches#static'
  get '/home' => 'patches#index'
  resources :line_items
  resources :users
  resources :patches
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
