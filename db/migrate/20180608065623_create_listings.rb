class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :check_in, null: false
      t.string :check_out, null: false
      t.string :cancellation_policy, null: false
      t.boolean :pets_allowed, null: false
      t.string :terrain, null: false
      t.integer :price, null: false
      t.integer :capacity, null: false
      t.string :type, null: false

      t.timestamps
    end

    add_index :listings, :host_id
    add_index :listings, :title, unique: true
    add_index :listings, :check_in
    add_index :listings, :check_out
  end
end
