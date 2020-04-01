require "rails_helper"

describe MovieReservation, type: :model do 
  describe "associations" do
    it { should belong_to(:movie) }
    it { should belong_to(:user) }
  end
end
