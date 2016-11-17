class RemovePriceCurrencyFromPatches < ActiveRecord::Migration[5.0]
  def change
    remove_column :patches, :price_currency
  end
end
