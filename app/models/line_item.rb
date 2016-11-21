class LineItem < ApplicationRecord

  belongs_to :cart
  belongs_to :patch

  validates :cart, :patch, presence: true

  # validates :patch_id, uniqueness: { scope: :cart }

  def cost
    patch.price * quantity
  end



end
