class CartsController < ApplicationController

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: @cart.line_items
  end

  def update
    @cart = Cart.find_by(token: params[:token])
    @cart.update! (cart_params)
    # @cart.ship_to_address = params[:ship_to_address],
    # @cart.email = params[:email],
    if @cart.save
      render json: @cart
    else
      render json: @cart.errors
    end
  end

  private

  def cart_params
    params.permit(:ship_to_address, :email, :token)
  end

end
