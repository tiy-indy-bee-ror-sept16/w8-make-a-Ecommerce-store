class LineItem < ApplicationRecord
  has_many :patches
  belongs_to :cart

  # belongs_to :patches
end
