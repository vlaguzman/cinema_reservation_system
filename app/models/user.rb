class User < ApplicationRecord
  validates_presence_of :first_name, :international_id, :email
end
