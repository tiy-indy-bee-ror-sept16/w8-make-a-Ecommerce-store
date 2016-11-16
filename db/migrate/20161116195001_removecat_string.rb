class RemovecatString < ActiveRecord::Migration[5.0]
  def change
    remove_column :patches, :category
  end
end
