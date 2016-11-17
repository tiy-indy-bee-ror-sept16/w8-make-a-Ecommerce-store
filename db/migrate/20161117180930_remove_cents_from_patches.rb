class RemoveCentsFromPatches < ActiveRecord::Migration[5.0]
  def change
    remove_column :patches, :price_cents
  end
end
