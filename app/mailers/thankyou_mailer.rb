class ThankyouMailer < ApplicationMailer

  def thank_you(cart)
	@cart = cart
	mail(to: @cart.email, subject: “Welcome to whatever”)
  end
end
