class AddimgidToPatch < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :image_id, :string
  end
end
