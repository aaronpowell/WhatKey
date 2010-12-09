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