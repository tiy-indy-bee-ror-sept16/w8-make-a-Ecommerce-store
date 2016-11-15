class Patch < ApplicationRecord
  
    attr_accessor: :product, :sku, :price, :available, :year, :description, :category

    def initialize(product:, sku:, price:, available:, year:, description:, category:)
      @product = product
      @sku = sku.to_i
      @price = price.to_i
      @available = available
      @year = year
      @description = description
      @category = category
    end


end
