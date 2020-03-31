Rails.application.routes.draw do
  resource :user
  resource :movie

  root 'home#index'
  get 'movies', to: 'movies#index'
  get 'users', to: 'users#index'
end
