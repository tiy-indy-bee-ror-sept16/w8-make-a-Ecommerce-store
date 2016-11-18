Rails.configuration.stripe = {
<<<<<<< HEAD

  :publishable_key => ENV["stripe_publishable_key"],
  :secret_key      => ENV["stripe_secret_key"]

=======
  :publishable_key => ENV["stripe_publishable_key"],
  :secret_key      => ENV["stripe_secret_key"]
>>>>>>> c758cef05caf7503a432ac951ac94294f9cd6568
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
