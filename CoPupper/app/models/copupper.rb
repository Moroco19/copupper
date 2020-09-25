class Copupper < ApplicationRecord
    belongs_to :user
    belongs_to :office
    belongs_to :department
    has_many :images
end