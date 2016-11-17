class Cart < ApplicationRecord

  has_many :line_items
  has_many :patches
  # belongs_to :user

end
