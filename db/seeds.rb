# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
<<<<<<< HEAD
=======
require 'csv'


info = CSV.foreach(Rails.root + "db/IronGloryInventory.csv", headers: true, :header_converters => :symbol)


info.each do |row|
 Patch.create!(row.to_h)
end
>>>>>>> 861d37fc73ad9d6a72ed6a543a2b3f8d3f219a5f
