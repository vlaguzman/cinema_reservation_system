require "rails_helper"

describe MovieFunction, type: :model do 
  describe "validations" do
    it { should respond_to(:description) }
    it { should respond_to(:presentation_day) }
    it { should validate_presence_of(:available_chairs) }
  end
end
