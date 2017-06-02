puts "EventManager Initialized!"

File.exist? "event_attendees.csv"

lines = File.readlines "event_attendees.csv"
lines.each do |line|
  columns = line.split(",")
  puts columns
end