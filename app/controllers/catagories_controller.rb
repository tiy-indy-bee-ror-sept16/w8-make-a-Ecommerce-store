class CatagoriesController < ApplicationController

  def show
    @category = Categories.find_by(name: params[:name])
    render json: @category
  end

  def filter
    @patches = Patch.all
    if params[:search]
      @patches = @patches.search_by_name(params[:search])
    end
    @patches.order(params[:order] || { created_at: :desc })
    @patches = @patches.ransack(params[:filter]).result
    @patches = @patches.to_a.uniq
    render json: @patches
  end


end
