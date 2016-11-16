class CatagoriesController < ApplicationController


  def show
    @category = Categories.find_by(name: params[:id])
    render json: @category
  end


end
