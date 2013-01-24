require 'rubygems'
require 'sinatra'
require 'sinatra/content_for'
require 'haml'
require 'sass'
require 'rdiscount'
require 'coffee-script'

class SassEngine < Sinatra::Base

  set :views,   File.dirname(__FILE__)    + '/assets/sass'

  get '/stylesheets/*.css' do
    filename = params[:splat].first
    sass filename.to_sym
  end

end

class CoffeeEngine < Sinatra::Base

  set :views,   File.dirname(__FILE__)    + '/assets/coffeescript'

  get "/javascripts/*.js" do
    filename = params[:splat].first
    coffee filename.to_sym
  end

end

class SWApplication < Sinatra::Base
  set :views,   File.dirname(__FILE__)    + '/views'
  set :public_folder,  File.dirname(__FILE__)    + '/public'
  helpers Sinatra::ContentFor
  use SassEngine
  use CoffeeEngine

  before do
    cache_control( :public, :must_revalidate, :max_age => 3600 ) unless development?
  end

  get '/' do
    haml :index
  end
end
