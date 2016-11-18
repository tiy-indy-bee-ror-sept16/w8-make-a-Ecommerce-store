class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :created_at, :patch_id, :quantity

  has_one :cart
  has_one :patch
end
