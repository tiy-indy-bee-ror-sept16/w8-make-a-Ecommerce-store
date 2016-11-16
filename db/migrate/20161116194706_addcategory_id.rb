class AddcategoryId < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :category_id, :integer
  end
end
