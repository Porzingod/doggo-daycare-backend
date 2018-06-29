class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :user_id
      t.string :color
      t.integer :happiness
      t.integer :hunger
      t.integer :poopy
      t.integer :pipi
      t.integer :thirst

      t.timestamps
    end
  end
end
