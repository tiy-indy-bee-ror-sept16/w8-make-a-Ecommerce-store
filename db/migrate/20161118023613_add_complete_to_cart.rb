class AddCompleteToCart < ActiveRecord::Migration[5.0]
  def change

    add_column :carts, :complete, :boolean, null: false, default: false

  end
end
