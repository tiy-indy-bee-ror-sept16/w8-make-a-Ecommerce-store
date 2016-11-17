class PatchSerializer < ActiveModel::Serializer

  attributes :product, :sku, :price, :available, :year, :description, :category, :size, :category_id, :image_id

  def image
    Refile.attachment_url(object, :image_id, :fit, 100, 100, format: "png")
  end

end
