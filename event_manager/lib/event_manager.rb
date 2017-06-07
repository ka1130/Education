require 'csv'
require 'sunlight/congress'
require 'erb'
require 'date'

Sunlight::Congress.api_key = "e179a6973728c4dd3fb1204283aaccb5"

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5,"0")[0..4]
end

def legislators_by_zipcode(zipcode)
  Sunlight::Congress::Legislator.by_zipcode(zipcode)
end

def save_thank_you_letters(id,form_letter)
  Dir.mkdir("output") unless Dir.exists?("output")

  filename = "output/thanks_#{id}.html"

  File.open(filename,'w') do |file|
    file.puts form_letter
  end
end

def sanitize_phone(phone)
  if phone.length == 11 && phone[0] == "1"
    phone = phone[1..11]
  elsif phone.length == 11 && phone[0] != "1"
    return ""
  end
  return phone
end

def validate_phone(phone)
  if phone.length < 10 
    return false
  elsif phone.length == 10 && phone.scan(/\D/).empty?
    return true
  elsif phone.length > 11
    return false
  else
    return false
  end
end

def parse_date(date)
 format = "%m/%d/%Y %H:%M"
 date = DateTime.strptime(date, format)
 return date
end

puts "EventManager initialized."

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
  hour =  date.hour
  minutes = date.min
  week_day = date.wday
 
  save_thank_you_letters(id,form_letter)

  puts "#{name} #{zipcode} #{hour}:#{minutes} #{week_day}"
end


