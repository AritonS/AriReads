class Api::AuthorsController < ApplicationController

    def new
        @author = Author.new
    end

    def index
        @authors = Author.all
    end

    def create
        @author = Author.new(author_params)

        if @author.save
            login!(@author)
            render 'api/authors/show'
        else
            render json: @author.errors.full_messages
        end
    end

    def show
        @author = Author.find_by(params[:id])
        render 'api/authors/show'
    end

    private
    def author_params
        params.require(:author).permit(:name, :password)
    end

end
