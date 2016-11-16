class PatchesController < ApplicationController

  def index
    # if current_user
    #   @user = current_user
    # else
    #   @user = User.new
    # end
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

  # def create
  #   @patch = Patch.new(patch_params)
  #   if @patch.save!
  #     render json: @patches
  #   end
  # else
  #   render json: @patches
  # end

  #Ransack...

    # def filter
    #   @patches = Patch.all
    #   if params[:search]
    #     @patches = @patches.search_by_name(params[:search])
    #   end
    #   @patches.order(params[:order] || { created_at: :desc })
    #   @patches = @patches.ransack(params[:filter]).result
    #   @patches = @patches.to_a.uniq
    #   render json: @patches
    # end

  def edit

  end

  def static

  end

  private

  def patch_params
    params.require(:patch).permit(:product, :sku, :price, :available, :year, :description, :category)
  end

end
