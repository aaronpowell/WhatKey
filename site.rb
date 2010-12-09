require 'rubygems'
require 'sinatra'
require 'haml'

configure :production do
  # app startup
end

set :public, File.dirname(__FILE__) + '/static'
set :views, File.dirname(__FILE__) + '/'

get '/' do
	haml :keydown
end

get '/keydown' do
	haml :keydown
end

get '/keypress' do
	haml :keypress
end

get '/keyup' do
	haml :keyup
end 

get '/about' do
	haml :about
end