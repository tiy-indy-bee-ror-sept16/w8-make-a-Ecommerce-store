class AddingMoneyToPatch < ActiveRecord::Migration[5.0]
  def change
    add_monetize :patches, :price
  end
end
