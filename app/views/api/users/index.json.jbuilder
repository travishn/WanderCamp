json.key_format! camelize: :lower

json.user do
  @users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end
