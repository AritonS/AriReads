class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :name, null: false
      t.string :img_url
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :authors, :name
    add_index :authors, :session_token
  end
end
