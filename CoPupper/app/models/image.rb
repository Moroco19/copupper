class Image < ApplicationRecord
    belongs_to :copupper

    attr_accessor :not_avatar
    
    def not_avatar
        self.update(is_avatar: false)
    end
end