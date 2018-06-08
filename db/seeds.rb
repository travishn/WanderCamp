# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create({
  first_name: 'Russel', 
  last_name: 'Pixar', 
  username: 'RusselTheExplorer', 
  password: 'badgecollector', 
  zipcode: 92130,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1528435548/russel.png"
 })

Listing.destroy_all
