class CreateTabletable < ActiveRecord::Migration[5.1]
  def change
    create_table :tabletables do |t|
      t.string :url, null: false
      t.string :status, null: false
      t.string :music
      t.timestamps
    end
  end
end
