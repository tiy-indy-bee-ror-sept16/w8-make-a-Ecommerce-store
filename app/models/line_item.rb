class LineItem < ApplicationRecord

  belongs_to :cart
  belongs_to :patch

  def cost
    patch.price * quantity
  end

end
