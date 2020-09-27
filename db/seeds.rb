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
Image.destroy_all

amoroc = User.create!(username: 'amoroco', email: 'amoroco@test.com', password: 'password', first_name: 'Andrew', last_name: 'Moroco')
samson = User.create!(username: 'samsong', email: 'ssong@test.com', password: 'password', first_name: 'Samantha', last_name: 'Song')
dmoroc = User.create!(username: 'dmoroco', email: 'dmoroco@test.com', password: 'password', first_name: 'Daniel', last_name: 'Moroco')
puts "#{User.count} users created!"

depit = Department.create!(name: 'Information Technology')
depfi = Department.create!(name: 'Finance')
deple = Department.create!(name: 'Legal')
depfa = Department.create!(name: 'Real Estate and Facilities')
dephr = Department.create!(name: 'Human Resources')
depen = Department.create!(name: 'Engineering')
depmr = Department.create!(name: 'Marketing')
depsa = Department.create!(name: 'Sales')
deppr = Department.create!(name: 'Public Relations')
puts "#{Department.count} departments created!"

offsf = Office.create!(name: 'San Francisco Embarcadero', street: '160 Spear St #1700', city: 'San Francisco', state: 'CA', zip: '94105')
offny = Office.create!(name: 'New York Empire State', street: '20 W 34th St #1200', city: 'New York', state: 'NY', zip: '10001')
offmb = Office.create!(name: 'Miami Beach', street: '1 Lincoln Rd', city: 'Miami Beach', state: 'FL', zip: '33139')
offch = Office.create!(name: 'Chicago Wrigley Building', street: '400 Michigan Ave', city: 'Chicago', state: 'IL', zip: '60611')
offau = Office.create!(name: 'Austin Downtown', street: '310 E 5th St', city: 'Austin', state: 'TX', zip: '78701')
offla = Office.create!(name: 'Los Angeles Downtown', street: '400 S Hope St', city: 'Los Angeles', state: 'CA', zip: '90071')
offvc = Office.create!(name: 'Vancouver Beachfront', street: '1601 Bayshore Dr', city: 'Vancouver', state: 'BC', zip: 'V6G 2V4')
puts "#{Office.count} offices created!"

doge = Copupper.create!(name: 'Doge', breed: 'Shiba Inu', age: 7, user_id: amoroc.id, office_id: offsf.id, department_id: depit.id)
ding = Copupper.create!(name: 'Dingding', breed: 'Pomeranian', age: 4, user_id: samson.id, office_id: offvc.id, department_id: deple.id)
harl = Copupper.create!(name: 'Harley', breed: 'Pitbull', age: 2, user_id: dmoroc.id, office_id: offvc.id, department_id: depsa.id)
puts "#{Copupper.count} copuppers created!"

doge0 = Image.create!(url: 'https://res.cloudinary.com/dgwjvaxsu/image/upload/v1601017535/peidyuk7tmclnwk6c0mc.jpg', is_avatar: true, copupper_id: doge.id)
doge1 = Image.create!(url: 'https://res.cloudinary.com/dgwjvaxsu/image/upload/v1601047240/v87ofjdp09y7s7dvyf1f.jpg', is_avatar: false, copupper_id: doge.id)
ding0 = Image.create!(url: 'https://res.cloudinary.com/dgwjvaxsu/image/upload/v1601237067/dingdingtall_kqhhqi.jpg', is_avatar: true, copupper_id: ding.id)
ding1 = Image.create!(url: 'https://res.cloudinary.com/dgwjvaxsu/image/upload/v1601237064/dingdingwide_dp9njd.jpg', is_avatar: false, copupper_id: ding.id)
harl0 = Image.create!(url: 'https://res.cloudinary.com/dgwjvaxsu/image/upload/v1601046280/zovoix5ao555g1mzhacz.jpg', is_avatar: true, copupper_id: harl.id)
puts "#{Image.count} images created!"