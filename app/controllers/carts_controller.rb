class CartsController < ApplicationController
  require_before_action
end

def index
 if current_user
   @cart = current_user.cart
 else
   @cart = Cart.new
   @cart.save!
     render json: @cart
 end
 @patches = @cart.patches
end

def create
 @cart = Cart.new()
 if current_user
   @cart.user = current_user
 end
   @cart.save
   render json: @cart
end


# Mock Cart Model!!!

class Cart < ActiveRecord::Base

 has_many :patches
 belongs_to :user

end
