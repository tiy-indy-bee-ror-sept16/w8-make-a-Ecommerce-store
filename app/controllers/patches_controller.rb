class PatchesController < ApplicationController

    def index
      @patches = Patch.all
      render json: @patches
    end

    def static
    end


end
