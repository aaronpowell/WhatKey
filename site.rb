['sinatra', 'haml'].each {|gem| require gem}
require 'sinatra/reloader' if development?

set :haml, :format => :html5

get '/' do
	haml :keydown, :locals => {:title => "keydown event"}
end

get '/keydown' do
	haml :keydown, :locals => {:title => "keydown event"}
end

get '/keypress' do
	haml :keypress, :locals => {:title => "keypress event"}
end

get '/keyup' do
	haml :keyup, :locals => {:title => "keyup event"}
end 

get '/about' do
	haml :about, :locals => {:title => "About"}
end