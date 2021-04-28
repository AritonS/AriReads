# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              new_api_user GET    /api/users/new(.:format)                                                                 api/users#new {:format=>:json}
#             edit_api_user GET    /api/users/:id/edit(.:format)                                                            api/users#edit {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#           new_api_session GET    /api/session/new(.:format)                                                               api/sessions#new {:format=>:json}
#          edit_api_session GET    /api/session/edit(.:format)                                                              api/sessions#edit {:format=>:json}
#               api_session GET    /api/session(.:format)                                                                   api/sessions#show {:format=>:json}
#                           PATCH  /api/session(.:format)                                                                   api/sessions#update {:format=>:json}
#                           PUT    /api/session(.:format)                                                                   api/sessions#update {:format=>:json}
#                           DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#               api_authors GET    /api/authors(.:format)                                                                   api/authors#index {:format=>:json}
#                           POST   /api/authors(.:format)                                                                   api/authors#create {:format=>:json}
#            new_api_author GET    /api/authors/new(.:format)                                                               api/authors#new {:format=>:json}
#           edit_api_author GET    /api/authors/:id/edit(.:format)                                                          api/authors#edit {:format=>:json}
#                api_author GET    /api/authors/:id(.:format)                                                               api/authors#show {:format=>:json}
#                           PATCH  /api/authors/:id(.:format)                                                               api/authors#update {:format=>:json}
#                           PUT    /api/authors/:id(.:format)                                                               api/authors#update {:format=>:json}
#                           DELETE /api/authors/:id(.:format)                                                               api/authors#destroy {:format=>:json}
#                 api_books GET    /api/books(.:format)                                                                     api/books#index {:format=>:json}
#                           POST   /api/books(.:format)                                                                     api/books#create {:format=>:json}
#              new_api_book GET    /api/books/new(.:format)                                                                 api/books#new {:format=>:json}
#             edit_api_book GET    /api/books/:id/edit(.:format)                                                            api/books#edit {:format=>:json}
#                  api_book GET    /api/books/:id(.:format)                                                                 api/books#show {:format=>:json}
#                           PATCH  /api/books/:id(.:format)                                                                 api/books#update {:format=>:json}
#                           PUT    /api/books/:id(.:format)                                                                 api/books#update {:format=>:json}
#                           DELETE /api/books/:id(.:format)                                                                 api/books#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session
    resources :authors
    resources :books
  end

  root 'static_pages#root'
end



    # before_action :require_logged_in, only: [:show]

    # def new
    #     @user = User.new
    # end

    # def create
    #     @user = User.new(user_params)

    #     if @user.save
    #         login(@user)
    #         redirect_to users_url
    #     else
    #         flash.now[:errors] = @user.errors.full_messages
    #         render :new
    #     end
    # end

    # def edit
    # end

    # def update
    # end

    # def destroy

    # end

    # private
    # def user_params
    #     params.require(:user).permit(:username, :email, :password)
    # end
