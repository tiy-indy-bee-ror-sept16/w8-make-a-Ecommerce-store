Rails.configuration.stripe = {
<<<<<<< HEAD
  :publishable_key => ENV['PUBLISHABLE_KEY'],
  :secret_key      => ENV['stripe_api_key']
=======
  :publishable_key => ENV["stripe_publishable_key"],
  :secret_key      => ENV["stripe_secret_key"]
>>>>>>> 902587333eea4208319d10a778e2dba0b2496782
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
