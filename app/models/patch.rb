class Patch < ApplicationRecord
  belongs_to :line_item
  belongs_to :inventory
  belongs_to :cart

end
