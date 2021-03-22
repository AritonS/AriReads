class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show]
    before_action :require_logged_out, only: [:new, :create]

    def new
        @user = User.new
    end

    def index
        @users = User.all
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end