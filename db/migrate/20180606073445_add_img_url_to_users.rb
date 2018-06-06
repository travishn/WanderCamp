class AddImgUrlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :img_url, :string
  end
end
