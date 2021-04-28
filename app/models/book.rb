class Book < ApplicationRecord

    validates :author_id, :title, presence: true

    belongs_to: :author,
        foreign_key: :author_id,
        class_name: :Author

end