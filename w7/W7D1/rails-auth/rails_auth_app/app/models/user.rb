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
    attr_reader :password

    before_validation :ensure_session_token
    validates :username, :session_token, presense: true
    validates :password_digest, presense: { message: "Password can't be blank"}
    validates :password, length: { minimum: 6, allow_nil: true }

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.password_digest.is_password?(password) ? user : nil
    end

    def self.generate_session_token
        return SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token ||= SecureRandom::urlsafe_base64
        self.save!
    end

    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
end
