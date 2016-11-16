class CartsController < ApplicationController
  require_before_action

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
  
end
