class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :ship_to_address, :created_at

  has_many :line_items
end
