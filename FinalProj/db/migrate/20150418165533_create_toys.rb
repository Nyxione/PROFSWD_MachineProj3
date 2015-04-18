class CreateToys < ActiveRecord::Migration
  def change
    create_table :toys do |t|
		t.string :name
		t.integer :price
      t.timestamps null: false
    end
  end
end
