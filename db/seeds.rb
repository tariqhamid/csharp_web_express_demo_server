require 'json'

clients_json = IO.read('data/clients.json')
clients = JSON.load(clients_json)
products_json = IO.read('data/products.json')
products = JSON.load(products_json)
orders_json = IO.read('data/orders.json')
orders = JSON.load(orders_json)
puts 'read %s client records' % clients.count
puts 'read %s product records' % products.count
puts 'read %s order records' % orders.count

Client.delete_all
Client.create! clients
puts 'wrote %s client database records' % Client.count

Product.delete_all
Product.create! products
puts 'wrote %s product records' % Product.count

Order.delete_all
Order.create! orders
puts 'wrote %s order records' % Order.count

