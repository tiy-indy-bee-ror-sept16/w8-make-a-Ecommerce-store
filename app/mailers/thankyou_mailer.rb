class ThankyouMailer < ApplicationMailer

  def thank_you(cart)
	@cart = cart
	mail(:to => @cart.email,
  :subject => 'Thank you for shopping with us!')
  end
end
