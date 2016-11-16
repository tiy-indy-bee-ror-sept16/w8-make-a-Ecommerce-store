class PatchesController < ApplicationController

  def index
    @patches = Patch.all
    render json: @patches
  end


  def show
    @patch = Patch.find(params[:id])
  end

  def new
    @patch = Patch.new
  end

  # def create
  #  @patch = Patch.new
  #  @patch.name = params[:thing][:name]
  #  @patch.body = params[:thing][:body]
  #  @patch.save!
  #  redirect_to :root
  # end

  def create
    @patch = Patch.new(patch_params)
     if @patch.save!
      render json: @patches
    else
     render json: @patches
   end
   redirect_to :root
  end


  def edit

  end

  def static

  end

  private

  def patch_params
    params.require(:patch).permit(:product, :sku, :price, :available, :year, :description, :category)
  end

end
