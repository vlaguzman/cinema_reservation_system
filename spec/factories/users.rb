FactoryBot.define do
  factory :user do
    first_name { 'Vladimir' }
    last_name  { 'Guzman' }
    phone      { 9437 }
    email      { 'guzman.vla@gmail.com' }
    international_id { '1072647335' }
  end
end
