require 'rubygems'
require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/reloader' if development?
require 'haml'
require 'sass'
require 'rdiscount'

get '/' do
  # redirect '/goap'
  # haml :index
  haml :new
end

get '/old' do
  haml :index
end

get '/goap' do
  haml :goap, :layout => false
end

get '/programa' do
  haml :programa
end

get '/participantes' do
  haml :participantes
end

get '/mentores' do
  haml :mentores
end

get '/lugar' do
  haml :lugar
end

get '/inscripciones' do
  haml :inscripciones
end

get '/equipo' do
  haml :equipo
end

get '/stylesheets/*' do
  content_type 'text/css'
  sass '../styles/'.concat(params[:splat].join.chomp('.css')).to_sym
end
