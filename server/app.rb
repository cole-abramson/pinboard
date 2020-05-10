require 'sinatra'
require 'sinatra/json'
require "sinatra/reloader" if development?
require 'pry'

current_pin = {
  type: "IMAGE_URL",
  content: "http://coleabramson.com/pinboard.png"
}
current_image = ""

def to_current_pin(raw_content)
  if raw_content =~ /http(s?):\/\//
    {
      type: "IMAGE_URL",
      content: raw_content
    }
  else
    {
      type: "MARKDOWN",
      content: raw_content
    }
  end
end

post '/sms' do
  if params['MediaUrl0']
    current_image = params['MediaUrl0']

    current_pin = {
      type: "IMAGE_URL",
      content: "https://pinboard-nexusa.herokuapp.com/image.jpg"
    }
  else
    current_pin = to_current_pin(params['Body'])
  end

  halt 200
end

post '/email' do
  current_pin = to_current_pin(params['plain'])
  halt 200
end

get '/current_pin' do
  json current_pin
end

get '/image.jpg' do
  redirect current_image
end
