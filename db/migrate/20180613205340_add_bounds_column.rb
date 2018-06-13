class AddBoundsColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :lon, :float
    add_column :listings, :lat, :float
  end
end
