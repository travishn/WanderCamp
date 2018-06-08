# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_08_180733) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listing_photos", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.string "img_url", null: false
    t.index ["listing_id"], name: "index_listing_photos_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.string "check_in", null: false
    t.string "check_out", null: false
    t.string "cancellation_policy", null: false
    t.boolean "pets_allowed", null: false
    t.string "terrain", null: false
    t.integer "price", null: false
    t.integer "capacity", null: false
    t.string "type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["check_in"], name: "index_listings_on_check_in"
    t.index ["check_out"], name: "index_listings_on_check_out"
    t.index ["host_id"], name: "index_listings_on_host_id"
    t.index ["title"], name: "index_listings_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.integer "zipcode", null: false
    t.string "img_url", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
