class LineItemsController < ApplicationController

  # def new
  #   @item = Item.new
  #   @patch = Patch.find(params [:id])
  # end
  #
  #
  # def update
  #   @patch = Patch.find(params[:id])
  #   if @patch.update(patch_params)
  #     flash[:notice]="Patch was added to your cart"
  #     render json: @patch
  #   else
  #     flash[:notice]="Try that again"
  #     render json: @patch
  #   end
  # end
  #
  #
  # private
  #
  # def update_cart
  #   total = 0
  #   @cart.each do |x|
  #     total = total + (x.patch.price*x.quantity)
  #   end
  #   @cart.update(total: total)
  #   render json: @cart
  # end
  #
  #
  # def item_params
  #   params.require(:item).permit(:sku, :quantity)
  # end


end
