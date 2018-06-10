class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.integer :num_guests, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
    end

    add_index :bookings, :listing_id
    add_index :bookings, :guest_id
    add_index :bookings, :start_date
    add_index :bookings, :end_date
  end
end
