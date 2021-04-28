class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :author_id, null: false
      t.string :img_url
      t.string :title, null: false

      t.timestamps
    end
    add_index :books, :title
  end
end
