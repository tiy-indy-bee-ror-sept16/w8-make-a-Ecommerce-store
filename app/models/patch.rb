class Patch < ApplicationRecord
  
  has_many :line_items
  belongs_to :category
  attachment :image
<<<<<<< HEAD
  belongs_to :category
=======

>>>>>>> b0a1fd866e435df366c887c252b8b9e8414b1cd8
end
