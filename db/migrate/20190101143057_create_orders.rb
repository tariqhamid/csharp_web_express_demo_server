class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.column :order_uuid, :string
      t.column :client_uuid, :string
      t.column :date_str, :string
      t.column :product_uuid, :string
      t.column :quantity, :integer
    end
  end
end
