require 'date'

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
 format = "%m/%d/%y %H:%M"
 date = DateTime.strptime(date, format)
 return date
end