class AddEmailToCarts < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :email, :string
  end
end
