require 'csv'
require 'sunlight/congress'
require 'erb'
require_relative 'event_methods.rb'

Sunlight::Congress.api_key = "e179a6973728c4dd3fb1204283aaccb5"

puts "EventManager initialized."

def get_data

  contents = CSV.open 'event_attendees.csv', headers: true, header_converters: :symbol

  template_letter = File.read "form_letter.erb"
  erb_template = ERB.new template_letter
  

  contents.each do |row|
    id = row[0]
    name = row[:first_name]
    zipcode = clean_zipcode(row[:zipcode])
    legislators = legislators_by_zipcode(zipcode)
    form_letter = erb_template.result(binding)
    phone = sanitize_phone(row[:homephone])
    phone = validate_phone(phone)
    date = parse_date(row[:regdate])
    # hour =  date.hour
    # minutes = date.min
    week_day = date.wday
  
    save_thank_you_letters(id,form_letter)
    
  end

end

def get_hours_from_csv

  contents = CSV.open 'event_attendees.csv', headers: true, header_converters: :symbol
  hours_array = []

    contents.each do |row|
      date = parse_date(row[:regdate])
      hour =  date.hour
      hours_array << hour
    end

  return hours_array

end

puts get_most_popular_hour(get_hours_from_csv)



