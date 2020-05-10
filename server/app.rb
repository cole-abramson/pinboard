require 'sinatra'
require 'sinatra/json'

current_content = "https://placekitten.com/1000/800"

post '/sms' do
  content_type 'text/xml'
  current_content = params['Body']
end

get '/' do
  json current_content
end
