class User < ApplicationRecord
  has_many :dogs
  validates :username, uniqueness: true
end
