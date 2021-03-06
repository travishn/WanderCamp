desc "This task is called by the Heroku scheduler add-on"
task :ping_site => :environment do
  puts "Pinging site..."
  `curl https://wandercamp.herokuapp.com/`
  puts "done."
end

task :set_ping => :environment do
  puts "Pinging site..."
  `*/20 6-22 * * * curl https://wandercamp.herokuapp.com/ &> /dev/null`
  puts "done."
end