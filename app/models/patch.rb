class Patch < ApplicationRecord

  has_many :line_items
  belongs_to :category
  attachment :image
<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<< HEAD
  belongs_to :category
=======

>>>>>>> b0a1fd866e435df366c887c252b8b9e8414b1cd8
=======
=======
  monetize :price_cents
>>>>>>> f8c4d1f7f55daa46fe1b9f96e23c034139498b71

end
