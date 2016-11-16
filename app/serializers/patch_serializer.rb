class PatchSerializer < ActiveModel::Serializer
  attributes :product, :sku, :price, :available, :year, :description, :category, :size, :category_id, :image

  def image
    Refile.attachment_url(object, :image, :fit, 100, 100, format: "png")
  end
  
end
