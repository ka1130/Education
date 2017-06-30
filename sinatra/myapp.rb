require 'sinatra'

get '/' do
  output = 'Hello world!'
  output << '<br />'
  output << '<a href=\'/goodbye\'>Leave</a>'
end

get '/goodbye' do
  'Goodbye world!'
end

get '/about' do
  output = '<h2>Sinatra</h2>'
  output << '<p>This is my first Sinatra app</p>'
  output
end
