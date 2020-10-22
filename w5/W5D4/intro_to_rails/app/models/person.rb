# require 'sqlite3'

class Person < ApplicationRecord
    validates :name, :house, presense: true
    
    belongs_to :house,
        primary_key: :id,
        foriegn_key: :house_id,
        class_name: :House
end


