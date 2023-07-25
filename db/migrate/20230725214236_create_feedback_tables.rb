class CreateFeedbackTables < ActiveRecord::Migration[7.0]
  def change
    create_table :feedback_tables do |t|
      t.string :firstName
      t.string :lastName
      t.string :userName
      t.string :eventName
      t.string :message

      t.timestamps
    end
  end
end
