class CreateCopuppers < ActiveRecord::Migration[6.0]
  def change
    create_table :copuppers do |t|
      t.string :name
      t.string :breed
      t.integer :age
      t.integer :user_id
      t.integer :office_id
      t.integer :department_id

      t.timestamps
    end
  end
end
