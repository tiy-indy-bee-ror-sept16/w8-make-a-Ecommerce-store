class LineItem < ApplicationRecord

  belongs_to :cart
  belongs_to :patch

  validates :cart, :patch, presence: true

  def cost
    patch.price * quantity
  end


end
