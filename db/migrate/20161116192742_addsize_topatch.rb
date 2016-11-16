class AddsizeTopatch < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :size, :string
  end
end
