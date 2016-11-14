class CreatePatches < ActiveRecord::Migration[5.0]
  def change
    create_table :patches do |t|

      t.timestamps
    end
  end
end
