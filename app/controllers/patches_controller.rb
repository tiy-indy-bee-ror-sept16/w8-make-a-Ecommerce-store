class PatchesController < ApplicationController

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
