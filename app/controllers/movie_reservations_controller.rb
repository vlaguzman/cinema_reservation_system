class MovieReservationsController < ApplicationController
  def new
    @movie_reservation = MovieReservation.new()
  end

  def create
    MovieReservation.create(movie: Movie.find(params[:movie_id]), user: User.find_by(international_id: params[:cedula]))
  end

  def index
    @movie_reservations = MovieReservation.all
    respond_to do |format|
      format.html
      format.json { render json: @movie_reservations }
    end
  end

  def show
    @movie_reservation = MovieReservation.find(params[:id])
  end
end
