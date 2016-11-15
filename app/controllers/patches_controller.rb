class PatchesController < ApplicationController

    def index
      @patches = Patch.all
    end

    def static
    end


end
