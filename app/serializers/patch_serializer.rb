class PatchSerializer < ActiveModel::Serializer
  attributes :sku, :price, :available, :size, :year, :description, :category, :image
  def image
    
  end

end
