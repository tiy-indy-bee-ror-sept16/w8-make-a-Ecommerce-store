class Patch < ApplicationRecord
  belongs_to :line_item
  belongs_to :patches
  belongs_to :cart
end
