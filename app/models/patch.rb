class Patch < ApplicationRecord

  has_many :line_items
  belongs_to :category
  attachment :image
<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<< HEAD
  belongs_to :category
=======

>>>>>>> b0a1fd866e435df366c887c252b8b9e8414b1cd8
=======

>>>>>>> 76b026f469ade8c950080154e0af8ec8e6cc3758
end
