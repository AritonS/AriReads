class Api::BooksController < ApplicationController

    def new
        @book = Book.new
    end

    def index
        @books = Book.all
    end

    def create
        @book = Book.new(book_params)

        if @book.save
            render 'api/books/:id'
        else
            render json: @book.errors.full_messages
        end
    end

    def show
        @book = Book.find_by(params[:id])
        render 'api/books/show'
    end

    private
    def book_params
        params.require(:book).permit(:title)
    end
end
