class ChargesController < ApplicationController
  def new
  end

  def create
    # Amount in cents
    @cart = Cart.find(params[:cart_id])
    @amount = @cart.cart_subtotal

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Iron Glory customer',
      :currency    => 'usd'
    )

    render json: ["Thank you for shopping with us!"]

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end



end
