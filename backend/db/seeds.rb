# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "jason")
User.create(username: "sarah")
Dog.create(name: 'GabeDeDog', user_id: 1, happiness: 1, hunger: 4, thirst: 5, poopy: 6, pipi: 7, color: "rainbow")
Dog.create(name: 'LuckyShibe', user_id: 2, happiness: 5, hunger: 6, thirst: 7, poopy: 8, pipi: 9, color: "aquamarine" )
