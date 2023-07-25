json.extract! feedback_table, :id, :firstName, :lastName, :userName, :eventName, :message, :created_at, :updated_at
json.url feedback_table_url(feedback_table, format: :json)
