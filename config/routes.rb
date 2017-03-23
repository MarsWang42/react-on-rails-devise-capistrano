Rails.application.routes.draw do
  root 'hello_world#index'
  resources :chatrooms
  devise_for :users, path: "user",
    :controllers => {
      :sessions  => "users/sessions",
      :registrations => "users/registrations",
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
