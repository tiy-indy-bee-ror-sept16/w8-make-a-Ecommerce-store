class PatchesController < ApplicationController

    def index
      @patches = Patch.all
      @patch = Patch.new
    end

    def show
      @patch = Patch.find(params[:id])
    end

    def create
      # ???
    end

    def new
      @patch = Patch.new
    end

    private

    def patch_params
      params.require(:patch)
    end


end
