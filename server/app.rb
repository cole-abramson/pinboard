require 'sinatra'
require 'sinatra/json'
require "sinatra/reloader" if development?

current_content = "https://placekitten.com/1000/800"

post '/sms' do
  content_type 'text/xml'
  current_content = params['Body']
end

get '/current_pin' do
  json({
    type: "IMAGE_URL",
    url: current_content
  })
end
