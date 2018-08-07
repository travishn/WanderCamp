desc "This task is called by the Heroku scheduler add-on"
task :ping_site => :environment do
  puts "Pinging site..."
  `curl https://wandercamp.herokuapp.com/`
  puts "done."
end