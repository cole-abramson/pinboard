require 'rubygems'
require 'bundler'
require 'sinatra'
Bundler.setup(:default)

@current_content = "https://placekitten.com/1000/800"

post '/sms' do
  content_type 'text/xml'
  @current_content = params['Body']
end

get '/' do
  @current_content
end
