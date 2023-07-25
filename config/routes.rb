Rails.application.routes.draw do
  resources :admins
  resources :events_options
  resources :feedback_tables
  resources :voting_events
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
