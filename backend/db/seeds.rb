# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "jason")
User.create(username: "sarah")
Dog.create(name: 'AAAA', user_id: 1, happiness: 3, hunger: 4, thirst: 5, poopy: 6, pipi: 7 )
Dog.create(name: 'CCCC', user_id: 2, happiness: 5, hunger: 6, thirst: 7, poopy: 8, pipi: 9 )
