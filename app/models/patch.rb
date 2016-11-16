class Patch < ApplicationRecord
  has_many :line_item
  attachment :image
end
