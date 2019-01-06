Rails.application.routes.draw do
  namespace :api do
    resources :clients, only: [:index]
    resources :products, only: [:index]
    resources :orders, only: [:index]
  end
  root 'home#index'
end
