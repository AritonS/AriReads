class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show]
    before_action :require_logged_out, only: [:new, :create]

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            redirect_to users_url
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def edit
    end

    def update
    end

    def destroy

    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end