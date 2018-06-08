class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :type, :string
    add_column :listings, :category, :string, null: false, default: 0
    change_column :listings, :category, :string, default: nil
  end
end
