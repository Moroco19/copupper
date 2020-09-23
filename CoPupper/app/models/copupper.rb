class Copupper < ApplicationRecord
    belongs_to :user
    has_one :office
    has_one :department
end