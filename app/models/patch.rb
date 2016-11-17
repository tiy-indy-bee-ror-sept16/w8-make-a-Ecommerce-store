class Patch < ApplicationRecord
  # include PgSearch

  has_many :line_items
  belongs_to :category
  attachment :image
<<<<<<< HEAD
  belongs_to :category
  monetize :price_cents
||||||| merged common ancestors
  monetize :price_cents
=======


  # scope :name, -> { where(:name true) }
  # pg_search_scope :search_by_name, {:associated_against => against: :name}

>>>>>>> f739aa095a9b66bc27e8d8f23d2f742aaab722fd

end
