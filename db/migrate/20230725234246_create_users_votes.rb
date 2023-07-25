class CreateUsersVotes < ActiveRecord::Migration[7.0]
  def change
    create_table :users_votes do |t|
      t.integer :id
      t.string :userName

      t.timestamps
    end
  end
end
