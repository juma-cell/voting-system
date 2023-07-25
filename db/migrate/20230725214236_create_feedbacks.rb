class CreateFeedbacks < ActiveRecord::Migration[7.0]
  def change
    create_table :feedbacks do |t|
      t.string :firstName
      t.string :lastName
      t.string :userName
      t.string :eventName
      t.string :message

      t.timestamps
    end
  end
end
