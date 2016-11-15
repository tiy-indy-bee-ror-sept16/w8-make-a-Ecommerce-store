# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  require 'csv'
  # require 'erb'

  info = CSV.foreach("Iron Glory Inventory.csv", headers: true, :header_converters => :symbol)
  puts info

  # class inventory (move the initializer to a model...)

  #   attr_accessor: :product, :sku, :price, :available, :year, :description, :category
  #
  #   def initialize(product:, sku:, price:, available:, year:, description:, category:)
  #     @product = product
  #     @sku = sku.to_i
  #     @price = price.to_i
  #     @available = available
  #     @year = year
  #     @description = description
  #     @category = category
  #   end
  #
  # end
