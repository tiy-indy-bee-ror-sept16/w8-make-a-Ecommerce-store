class AddPatchidToLineItems < ActiveRecord::Migration[5.0]
  def change
    add_column :line_items, :patch_id, :integer
  end
end
