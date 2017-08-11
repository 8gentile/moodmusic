class CreateTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :tabletables
    create_table :items do |t|
      t.string :url, null: false
      t.string :status, null: false
      t.string :music
      t.timestamps
    end
  end
end
