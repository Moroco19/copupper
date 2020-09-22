class Copupper < ApplicationRecord
    has_one :user
    has_one :office
    has_one :department
end