class AddAddressToCart < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :ship_to_address, :string
  end
end
