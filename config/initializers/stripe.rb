Rails.configuration.stripe = {

  :publishable_key => ENV["stripe_publishable_key"],
<<<<<<< HEAD
  :secret_key      => ENV["stripe_secret_key"],

||||||| merged common ancestors
  :secret_key      => ENV["stripe_secret_key"]

=======
  :publishable_key => ENV["stripe_publishable_key"],
  :secret_key      => ENV["stripe_secret_key"]
>>>>>>> c758cef05caf7503a432ac951ac94294f9cd6568
=======
  :secret_key      => ENV["stripe_secret_key"]
>>>>>>> cca927c9077ce73e556c98e5ac013c71ffe5f7d7
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
