class CartsController < ApplicationController

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: @cart.line_items
  end

  def update
    @cart = Cart.find_by(token: params[:token]),
    @cart.ship_to_address = params[:ship_to_address],
    @cart.email = params[:email],
    render json: @cart
  end
  
end
