class Patch < ApplicationRecord
  # include PgSearch

  has_many :line_items
  belongs_to :category
  attachment :image

  # scope :name, -> { where(:name true) }
  # pg_search_scope :search_by_name, {:associated_against => against: :name}

end
