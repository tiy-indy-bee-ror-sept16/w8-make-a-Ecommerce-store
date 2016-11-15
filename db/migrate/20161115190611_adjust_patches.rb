class AdjustPatches < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :product, :string
    add_column :patches, :sku, :string
    add_column :patches, :price, :integer
    add_column :patches, :available,:string
    add_column :patches, :year, :integer
    add_column :patches, :description, :text
    add_column :patches, :category, :string
  end
end
