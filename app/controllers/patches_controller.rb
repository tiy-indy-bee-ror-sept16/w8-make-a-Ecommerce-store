class PatchesController < ApplicationController
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


    def index
      @patches = Patch.all
      render json: @patches
    end


  def show
   @patch = Patch.find(params[:id])
  end

    def static
    end


private

def patch_params
 params.require(:patch)
end



end
