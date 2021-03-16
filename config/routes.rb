Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session
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