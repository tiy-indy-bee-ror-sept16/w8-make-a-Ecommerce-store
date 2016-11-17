class Patch < ApplicationRecord

  has_many :line_items
  belongs_to :category
  attachment :image
  belongs_to :category
  monetize :price_cents

end
