class Smartphone < ApplicationRecord
  validates :name, presense: true
end
