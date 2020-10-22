

class House < ApplicationRecord
    validates :address, presense: true
    
    has_many :residents
        primary_key: :id,
        foreign_key: :house_id,
        class_name: :Person
end

    # def up
    #     create_table :houses do |t|
    #         t.text :address

    #         t.timestamps
    #     end
    # end

    # def down
    #     drop_table :houses
    # end