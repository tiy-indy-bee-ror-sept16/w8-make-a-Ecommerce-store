class Patch < ApplicationRecord
  
  has_many :line_items
  belongs_to :category
  attachment :image

end
