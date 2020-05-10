require 'sinatra'
require 'sinatra/json'
require "sinatra/reloader" if development?
require 'pry'

current_pin = {
  type: "IMAGE_URL",
  content: "http://coleabramson.com/pinboard.png"
}

post '/sms' do
  if params['Body'] =~ /http(s?):\/\//
    current_pin = {
      type: "IMAGE_URL",
      content: params['Body']
    }
  else
    current_pin = {
      type: "MARKDOWN",
      content: params['Body']
    }
  end
end

post '/email' do
  current_pin = {
    type: "MARKDOWN",
    content: params['plain']
  }

  halt 200
end

get '/current_pin' do
  json current_pin
end
