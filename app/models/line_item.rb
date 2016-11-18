class LineItem < ApplicationRecord

  belongs_to :cart
  belongs_to :patch

  def cost
    item.price * quantity
  end

end
