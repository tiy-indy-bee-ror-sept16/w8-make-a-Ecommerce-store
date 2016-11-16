class RemoveimgPatch < ActiveRecord::Migration[5.0]
  def change
    remove_column :patches, :image
  end
end
