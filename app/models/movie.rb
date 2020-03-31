class Movie < ApplicationRecord
  validates_presence_of :name, :description
end
