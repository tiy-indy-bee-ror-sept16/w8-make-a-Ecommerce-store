class LineItemsController < ApplicationController

  def create
    if params[:token]
      @line_item = LineItem.new(
      patch_id: params[:patch_id],
      quantity: params[:quantity],
      cart_id: Cart.where(token: params[:token]).first
      )
    else
      @line_item = LineItem.new(
      patch_id: params[:patch_id],
      quantity: params[:quantity],
      cart_id: Cart.new
    end
    

  def update
    @line_item = LineItem.new(quanity: params[:quanity])
  end

  def destroy
    @line_item = LineItem.find(params :id)
    @line_item.destroy!
    render json: "Patch removed"
  end

end
