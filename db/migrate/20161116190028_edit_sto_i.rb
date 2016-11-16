class EditStoI < ActiveRecord::Migration[5.0]
  def change
     remove_column :patches, :available

  end
end
