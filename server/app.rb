require 'rubygems'
require 'bundler'
require 'sinatra'
Bundler.setup(:default)

post '/sms' do
  content_type 'text/xml'

  twiml.to_s
end