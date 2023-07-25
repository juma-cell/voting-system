json.extract! users_vote, :id, :id, :userName, :created_at, :updated_at
json.url users_vote_url(users_vote, format: :json)
