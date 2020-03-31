class AddIdAndEmailToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :email, :string 
    add_column :users, :international_id, :string 
  end
end
