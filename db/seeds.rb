# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create({
  first_name: 'Russell', 
  last_name: 'Pixar', 
  username: 'RusselTheExplorer', 
  password: 'badgecollector', 
  zipcode: 92130,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1528435548/russel.png"
 })

travis = User.create({
  first_name: 'Travis',
  last_name: 'Nguyen',
  username: 'travishn',
  password: 'password',
  zipcode: 92130,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1528475735/profile_pic.jpg"
})

national_park = User.create ({
  first_name: 'National Park Service',
  last_name: 'Federal agency',
  username: 'NPSfederal',
  password: 'password',
  zipcode: 94109,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1528476155/national-park.png"
})

Listing.destroy_all
starry = Listing.create({
  host_id: travis.id,
  title: 'Starry Night Camp',
  description: 'Space Magic Camp is located 2.2 miles (3 min drive) from the world famous
   Integratron. Landers is know for its starry skies and miles of smiles. If you want a 
   retreat from the fast vibration of the city, come enjoy vortex energy at Space Magic. 
   The light pollution is less than most of Joshua Tree and the view of the night sky and 
   sunrise is second to none. Space Magic Camp is also walking distance from the Lander Brewing 
   Co., where you may want to check out a band or enjoy a local brew. We are also just down the 
   street from the Gubler Orchid Farm, which has daily tours.',
   pets_allowed: false,
   terrain: 'Desert',
   price: 50
})

crystal = Listing.create({
  host_id: travis.id,
  title: 'Crystal Cove Camp',
  description: 'A bit of history: “Tyron’s Camp” (a café, auto camp, and tent campground) opened 
  during the 1920s along the beach and inland at Moro Canyon. In the late 1950s, the complex evolved 
  into a seasonal trailer destination known as “El Morro Beach Trailer Park.” Later, about 300 permanent 
  manufactured homes replaced seasonal beach trailers in this area. After tenants’ leases expired in 2005, 
  the trailers were removed to develop the Moro Campground and day-use facility. Moro Campground has 57 
  coastal terrace sites for both tents and RVs. It’s located along some bluffs right next to the Moro Canyon 
  and Moro Creek, providing plenty of nearby recreation. There’s also a ton of parking, which is ever so convenient, 
  and this huge campground is split into three loops with about 20 sites each: Coyote Run, Sage Loop, and Dolphin 
  Circle. Each have restrooms, coin showers and several accessible sites.',
  pets_allowed: true,
  terrain: 'Beach',
  price: 35
})

ocean_view = Listing.create({
  host_id: demo_user.id,
  title: 'Wild Tender Tipi Ocean View',
  description: 'Very peaceful and private immersion into the beautiful wild lands of the Coast. 
  Amazing views of the ocean and coastal mountains. Great smells, lots of wildlife and star gazing! 
  Enjoy a private sanctuary get away! We hope you find great restoration! Check out our other great site 
  SweepingViews for more amenities, such as RV, kitchen and large fire ring for groups.',
  pets_allowed: true,
  terrain: 'Beach',
  price: 110
})

casita = Listing.create({
  host_id: demo_user.id,
  title: 'Mountain View Casita UP-Style',
  description: 'Come and breathe the fresh mountain air in our brand new Casita in the redwood forest. 
  Glamping in style, our Casita is situated on a ridge overlooking the summit of the Santa Cruz Mountains; 
  The Casita is completely private and separate from the main house.  Enjoy the view with a glass of wine 
  on the front porch. Walk out front door to trails through the redwoods. Excellent restaurants in small, 
  quaint town of Felton, home to majestic Henry Cowell State Park. Or drive 20 minutes to Santa Cruz. 
  
  Felton is a community of 6K residents who live in the beautiful redwood forest of the Santa Cruz Mountains. 
  The two block long downtown area offers restaurants, market, shopping and sightseeing at the Big Foot Museum 
  and Henry Cowell State Park with miles of single track running and mountain biking trails.',
  pets_allowed: false,
  terrain: 'Mountain',
  price: 150
})

ListingPhoto.destroy_all
ListingPhoto.create({
  listing_id: starry.id,
  img_url: "http://res.cloudinary.com/emanon/image/upload/c_scale,h_480,w_720/v1528483203/rico-larroque-528914-unsplash.jpg"
})

ListingPhoto.create({
  listing_id: ocean_view.id,
  img_url: "http://res.cloudinary.com/emanon/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,w_720/v1528489179/photo-1465865523598-a834aac5d3fa.jpg"
})

ListingPhoto.create({
  listing_id: crystal.id,
  img_url: "http://res.cloudinary.com/emanon/image/upload/c_scale,h_480,w_720/v1528483745/eyaifnjbn1cwphxlad8j.jpg"
})

ListingPhoto.create({
  listing_id: casita.id,
  img_url: "http://res.cloudinary.com/emanon/image/upload/c_scale,h_480,w_720/v1528489573/photo-1484960055659-a39d25adcb3c.jpg"
})

Booking.destroy_all
Booking.create({
  listing_id: starry.id,
  guest_id: demo_user.id,
  num_guests: 4,
  start_date: Date.new(2018, 6, 10),
  end_date: Date.new(2018, 6, 12)
})

Booking.create({
  listing_id: ocean_view.id,
  guest_id: demo_user.id,
  num_guests: 4,
  start_date: Date.new(2018, 6, 5),
  end_date: Date.new(2018, 6, 7)
})

Booking.create({
  listing_id: crystal.id,
  guest_id: demo_user.id,
  num_guests: 4,
  start_date: Date.new(2018, 6, 20),
  end_date: Date.new(2018, 6, 22)
})

Review.destroy_all
Review.create({
  listing_id: starry.id,
  author_id: demo_user.id,
  comment: 'WoOoooOooO!!'
})

Review.create({
  listing_id: starry.id,
  author_id: travis.id,
  comment: 'There were tons of visible stars in the sky! It was great bonding experience to have
  with my brothers!'
})










