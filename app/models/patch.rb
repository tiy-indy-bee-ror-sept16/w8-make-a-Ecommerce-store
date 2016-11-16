class Patch < ApplicationRecord
  has_many :line_item
  attachment :image
  belongs_to :category
end
