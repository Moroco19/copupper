class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :url
      t.boolean :is_avatar
      t.integer :copupper_id

      t.timestamps
    end
  end
end
