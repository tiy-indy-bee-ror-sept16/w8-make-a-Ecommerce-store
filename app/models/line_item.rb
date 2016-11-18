class LineItem < ApplicationRecord

  belongs_to :cart
  belongs_to :patches

  def cost
    item.price * quantity
  end

end
