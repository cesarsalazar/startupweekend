require 'rubygems'
require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/reloader' if development?
require 'haml'
require 'sass'
require 'rdiscount'

get '/' do
  haml :index
end

get '/stylesheets/*' do
  content_type 'text/css'
  sass '../styles/'.concat(params[:splat].join.chomp('.css')).to_sym
end
