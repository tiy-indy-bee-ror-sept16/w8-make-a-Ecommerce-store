# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  require 'csv'
  # require 'erb'

  info = CSV.foreach("Iron Glory Inventory.csv", headers: true, :header_converters => :symbol) do |row|

    Info.find_or_create by({product: row[0]}) do |x|
      x.product = row[0]
      x.sku.to_i = row[1]
      x.price.to_i = row[2]
      x.available = row[3]
      x.year.to_i = row[4]
      x.description = row[5]
      x.category = row[6]
    end
  end 
