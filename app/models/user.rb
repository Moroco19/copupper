class User < ApplicationRecord
    validates :username, uniqueness: true
    has_secure_password
    has_secure_token :auth_token
    has_many :copuppers

    def invalidate_token
        self.update(auth_token: nil)
    end

    def self.validate_login(username, password)
        user = find_by(username: username)
        if user && user.authenticate(password)
            user
        end
    end

    def profile_info
        {user: { username: self.username, email: self.email, first_name: self.first_name, last_name: self.last_name, copuppers: self.copuppers} }
    end
end
