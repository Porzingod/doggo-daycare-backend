# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "jason")
User.create(username: "sarah")
Dog.create(name: 'AAAA', user_id: 1, color: 'red', happiness: 5, hunger: 5, poopy: 5, pipi: 5, thirst: 5 )
Dog.create(name: 'BBBB', user_id: 1, color: 'red', happiness: 5, hunger: 5, poopy: 5, pipi: 5, thirst: 5 )
Dog.create(name: 'CCCC', user_id: 2, color: 'red', happiness: 5, hunger: 5, poopy: 5, pipi: 5, thirst: 5 )
