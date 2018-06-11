class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false
      t.integer :author_id, null: false
      t.text :comment, null: false

      t.timestamps
    end

    add_index :reviews, :listing_id
    add_index :reviews, :author_id
  end
end
