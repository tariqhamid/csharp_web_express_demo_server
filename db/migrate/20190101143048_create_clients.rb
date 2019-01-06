class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.column :client_uuid, :string
      t.column :name, :string
      t.column :address, :string
      t.column :city, :string
      t.column :state, :string
      t.column :zip, :string
      t.column :phone, :string
      t.column :cell, :string
      t.column :email, :string
    end
  end
end
