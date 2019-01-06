class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.column :product_uuid, :string
      t.column :color, :string
      t.column :department, :string
      t.column :material, :string
      t.column :product_name, :string
      t.column :price, :float
      t.column :promotion_code, :string
    end
  end
end
