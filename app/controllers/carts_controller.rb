class CartsController < ApplicationController

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: @cart, include: ['line_items.patch']
  end

  def update
    @cart = Cart.find_by(token: params[:token])
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: @cart.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def cart_params
    params.permit(:ship_to_address, :email, :token, :complete)
  end

end
