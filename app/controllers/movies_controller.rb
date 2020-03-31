class MoviesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @movie = Movie.new(params)
  end

  def create
    Movie.create(movie_params)
  end

  def index
    @movies = Movie.all
    respond_to do |format|
      format.html
      format.json { render json: @movies }
    end
  end


  def destroy
    Movie.destroy(params[:id])
  end

  def update
    movie = Movie.find(params[id])
    movie.update(movie_params)
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :name, :description, :image_url)
  end
end
