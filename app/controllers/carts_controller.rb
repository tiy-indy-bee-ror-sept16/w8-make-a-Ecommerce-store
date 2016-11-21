class CartsController < ApplicationController

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: @cart, include: ['line_items.patch']
  end

  def update
    @cart = Cart.find_by(token: params[:token])
    @cart.update! (cart_params)
    if @cart.save
      if @cart.complete?
        thank_you_email
        render json: @cart
      else
        render json: @cart.errors
      end
    end

  end


  private

  def cart_params
    params.permit(:ship_to_address, :email, :token, :complete)
  end

end
