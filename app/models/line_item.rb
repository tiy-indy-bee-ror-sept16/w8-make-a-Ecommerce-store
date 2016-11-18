class LineItem < ApplicationRecord

  belongs_to :cart
  belongs_to :patch

  def cost
    patch.cost * quantity
  end


end
