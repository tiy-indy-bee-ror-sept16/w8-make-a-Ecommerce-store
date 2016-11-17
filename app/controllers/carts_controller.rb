class CartsController < ApplicationController


  def index
    # if current_user
    #   @cart = current_user.cart
    # else
      @cart = Cart.new
      @cart.save!
      render json: @cart
    end
    @patches = @cart.patches
  end

  def create
    @cart = Cart.new(cart_params)
    # if current_user
    #   @cart.user = current_user
    end
    if @cart.save
    render json: @cart
  else
    render json: @cart.errors.full_messages, status: :unprocessable_entity
  end

  private

  def cart_params
    params.permit(:email,:line_items)
  end


end
