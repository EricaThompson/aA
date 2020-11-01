# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#
class User < ApplicationRecord
    before_validation :ensure_session_token
    validates :username, :session_token, presense: true
    validates :password_digest, presense: { message: "Password can't be blank"}
    validates :password, length: { minimum: 6, allow_nil: true }
end
