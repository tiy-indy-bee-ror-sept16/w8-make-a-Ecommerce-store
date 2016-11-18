class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :ship_to_address, :created_at, :complete, :subtotal, :taxes, :shipping, :total

  has_many :line_items
end
