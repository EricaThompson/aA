# require 'sqlite3'

class Person < ApplicationRecord
    validates :name, :house, presense: true
    
    belongs_to :house,
        primary_key: :id,
        foriegn_key: :house_id,
        class_name: :House
end
    
    # def up
    #     create_table :people do |t|
    #         t.string :name
    #         t.integer :house_id

    #         t.timestamps
    #     end
    # end

    # def down
    #     drop_table :people
    # end

