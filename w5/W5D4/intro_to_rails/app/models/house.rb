

class House < ActiveTable::Migration[5.1]
    validates: :address
    def up
        create_table :houses do |t|
            t.text :address

            t.timestamps
        end
    end

    def down
        drop_table :houses
    end
end