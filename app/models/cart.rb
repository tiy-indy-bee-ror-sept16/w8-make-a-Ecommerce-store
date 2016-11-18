class Cart < ApplicationRecord

  has_many :line_items
  has_many :patches, :through, :line_items
  has_secure_token :token

  def subtotal
    line_itmes.reduce(0){|sum , line_itmes| sum += line.item.cost}
  end

  def taxes
    subtotal * 0.6
  end

  def shipping
    shipping = 500
  end

  def total
    subtotal + taxes + shipping
  end

end
