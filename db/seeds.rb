# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CREDIT FOR RANDOM RADIUS LAT/LON GENERATOR:
# https://stackoverflow.com/questions/43195899/how-to-generate-random-coordinates-within-a-circle-with-specified-radius

def random_point_in_disk(max_radius)
  r = max_radius * rand**0.5
  theta = rand * 2 * Math::PI
  [r * Math.cos(theta), r * Math.sin(theta)]
end

EarthRadius = 6371 # km
OneDegree = EarthRadius * 2 * Math::PI / 360 * 1000 # 1° latitude in meters

def random_location(lon, lat, max_radius)
  dx, dy = random_point_in_disk(max_radius)
  random_lat = lat + dy / OneDegree
  random_lon = lon + dx / ( OneDegree * Math::cos(lat * Math::PI / 180) )
  [random_lon, random_lat]
end

location_hash = {}

6.times do |n|
  location_hash[n] = random_location(-122.440653, 37.754734, 2000)
end

User.destroy_all
demo_user = User.create({
  first_name: 'Russell', 
  last_name: 'Pixar', 
  username: 'RusselTheExplorer', 
  password: 'badgecollector', 
  zipcode: 92130,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1528837179/russell_profile2.jpg"
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
  price: 35,
  lon: location_hash[2][0],
  lat: location_hash[2][1]
})

ocean_view = Listing.create({
  host_id: demo_user.id,
  title: 'Wild Tipi Ocean View',
  description: 'Very peaceful and private immersion into the beautiful wild lands of the Coast. 
  Amazing views of the ocean and coastal mountains. Great smells, lots of wildlife and star gazing! 
  Enjoy a private sanctuary get away! We hope you find great restoration! Check out our other great site 
  SweepingViews for more amenities, such as RV, kitchen and large fire ring for groups.',
  pets_allowed: true,
  terrain: 'Beach',
  price: 110,
  lon: location_hash[3][0],
  lat: location_hash[3][1]
})

casita = Listing.create({
  host_id: demo_user.id,
  title: 'Mountain View Casita',
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
  price: 70,
  lon: -122.307413,
  lat: 37.309737
})

igloo = Listing.create({
  host_id: travis.id,
  title: 'Winter Paradise',
  description: 'Been waiting for that one in a lifetime deal to come along? This sure is it, 
  and it is one of my favourite deals of all time. Don’t be put off by the price however, 
  wait ’til you see what is included! Enjoy a beautiful and unique experience in snowy Lapland, 
  Finland, where you can watch the Northern Lights from the comfort of your bed, These fabulous 
  one of a kind igloos are carved out of snow and ice every year, meaning it’s completely unique 
  every time!',
  pets_allowed: false,
  terrain: "Mountain",
  price: 300,
  lon: location_hash[0][0],
  lat: location_hash[0][1],
  capacity: 25,
  category: "glamping"
})

sky = Listing.create({
  host_id: travis.id,
  title: 'Above the Clouds',
  description: "Enjoy the breath-taking views at Above the Clouds camp. If you're hesitant about heights,
   and are afraid of being thrown in the the wilderness of camping, there is a city for you to escape to located
   only a few miles away. Be sure to book as soon as possible as this location is usually booked a month in advance.",
  pets_allowed: true,
  terrain: "Mountain",
  price: 80,
  capacity: 5,
  category: 'camping',
  lon: location_hash[4][0],
  lat: location_hash[4][1]
})

safari = Listing.create({
  host_id: travis.id,
  title: 'Canvas Safari',
  description: "Our canvas tents sleep two and boasts queen-size 
  beds with plush linens, lights, electrical outlets, and electric blankets for warmth at night. A ramped pathway 
  leads to your tent's entrance, and your patio holds lounge chairs and a campfire-style fire pit and grill. Three 
  roasting logs are provided for roasting s'mores or cooking food over your fire pit.
  
  During your stay, you'll also have access to our mid-century modern clubhouse, which includes ultra-modern bathrooms 
  and showers (including Malin + Goetz bath products). You're also welcome to enjoy free coffee and juice every morning in 
  the clubhouse, and local wine, beer, and snacks are available for purchase in our Canteen.

  The town of Guerneville is only a five minute bike ride away (bicycles are provided!), with restaurants, bars, ice cream 
  shops, antiques, and wine tasting. Hikes and outdoor excursions abound in the area, and there's nothing like a leisurely 
  float down the Russian River.",
  pets_allowed: false,
  terrain: "Forest",
  price: 150,
  capacity: 2,
  category: 'glamping',
  lon: location_hash[5][0],
  lat: location_hash[5][1]
})

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
   pets_allowed: true,
   terrain: 'Desert',
   price: 50,
   lon: location_hash[1][0],
   lat: location_hash[1][1]
})

ListingPhoto.destroy_all

ListingPhoto.create({
  listing_id: safari.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529082895/frti4vfgktbfvjssc0ce.jpg"
})

ListingPhoto.create({
  listing_id: safari.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529082949/ovwfnhgeuevjf9ohmc2i.jpg"
})

ListingPhoto.create({
  listing_id: safari.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529083175/qfpwxfv5lqhwjkltvoxz.jpg"
})

ListingPhoto.create({
  listing_id: sky.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529081853/8EHGA.jpg"
})

ListingPhoto.create({
  listing_id: sky.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529081923/v2.jpg"
})

ListingPhoto.create({
  listing_id: sky.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529082120/winter_20-nachtaufnahme.jpg"
})

ListingPhoto.create({
  listing_id: starry.id,
  img_url: "http://res.cloudinary.com/emanon/image/upload/c_scale,h_480,w_720/v1528483203/rico-larroque-528914-unsplash.jpg"
})

ListingPhoto.create({
  listing_id: starry.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1528957582/photo-1482355347028-ff60443f60fe.jpg"
})

ListingPhoto.create({
  listing_id: starry.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1528957645/photo-1473445145893-cee4ea284d29.jpg"
})

ListingPhoto.create({
  listing_id: igloo.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529079291/maxresdefault.jpg"
})

ListingPhoto.create({
  listing_id: igloo.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529080185/1498232128568.jpg"
})

ListingPhoto.create({
  listing_id: igloo.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529079764/photo-1483347756197-71ef80e95f73.jpg"
})

ListingPhoto.create({
  listing_id: ocean_view.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529049089/ymhadalnx2ddqnj6ox2a.jpg"
})

ListingPhoto.create({
  listing_id: ocean_view.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529052158/s3pognfc4j0eujfmoo8z.jpg"
})

ListingPhoto.create({
  listing_id: ocean_view.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529048988/z6021gbgx75efgpqawqh.jpg"
})


ListingPhoto.create({
  listing_id: crystal.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529049328/photo-1460500063983-994d4c27756c.jpg"
})

ListingPhoto.create({
  listing_id: crystal.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529049431/photo-1478296025124-90b11a7a36ee.jpg"
})

ListingPhoto.create({
  listing_id: crystal.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529049273/photo-1495131717858-2d2e62c41fe7.jpg"
})

ListingPhoto.create({
  listing_id: casita.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529050752/photo-1508098295130-7fed82579ab1.jpg"
})
ListingPhoto.create({
  listing_id: casita.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529030814/photo-1414016642750-7fdd78dc33d9.jpg"
})
ListingPhoto.create({
  listing_id: casita.id,
  img_url: "https://res.cloudinary.com/emanon/image/upload/v1529049785/photo-1477951324676-cd9dab85abd5.jpg"
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
  comment: 'There were tons of visible stars in the sky! It was great bonding experience to have with Doug! It was a shame that Mr.Fredericksen was unable to come along on this wanderful trip :('
})

Review.create({
  listing_id: starry.id,
  author_id: travis.id,
  comment: 'Starry Night Camp is a great quiet little spot to camp! If your looking for a place to rest your head while visiting Landers, Yucca Valley, or Joshua Tree, this is a great spot! Beautiful place to star gaze. Barbie is an excellent host, very laid back and helpful!'
})










