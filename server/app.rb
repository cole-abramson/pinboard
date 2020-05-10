require 'rubygems'
require 'bundler'
require 'sinatra'
Bundler.setup(:default)

post '/sms' do
  content_type 'text/xml'

  puts "body:"
  puts params['Body']
end

get '/' do
  'hey!'
end
