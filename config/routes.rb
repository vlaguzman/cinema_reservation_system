Rails.application.routes.draw do
  root 'home#index'
  resource :user
  resource :movie
  resource :movie_reservation

  get 'movies', to: 'movies#index'
  get 'users', to: 'users#index'
  get 'movie_reservations', to: 'movie_reservations#index'
end
