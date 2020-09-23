# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Department.destroy_all
Office.destroy_all
Copupper.destroy_all

tester = User.create!(username: 'test001', email: 'test001@test.com', password: 'password', first_name: 'Tester1', last_name: 'Tested1')
puts "#{User.count} users created!"

depit = Department.create!(name: 'Information Technology')
depfi = Department.create!(name: 'Finance')
deple = Department.create!(name: 'Legal')
depfa = Department.create!(name: 'Real Estate and Facilities')
dephr = Department.create!(name: 'Human Resources')
depen = Department.create!(name: 'Engineering')
depmr = Department.create!(name: 'Marketing')
puts "#{Department.count} departments created!"

offsf = Office.create!(name: 'San Francisco Embarcadero', street: '160 Spear St #1700', city: 'San Francisco', state: 'CA', zip: '94105')
offny = Office.create!(name: 'New York Empire State', street: '20 W 34th St #1200', city: 'New York', state: 'NY', zip: '10001')
puts "#{Office.count} offices created!"

doge = Copupper.create!(name: 'Doge', breed: 'Shiba Inu', age: 7, user_id: 1, office_id: 1, department_id: 1)
puts "#{Copupper.count} copuppers created!"