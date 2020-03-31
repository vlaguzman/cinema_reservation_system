require "rails_helper"

describe Movie, type: :model do 
  describe "validations" do
    it { should respond_to(:name) }
    it { should respond_to(:description) }
    it { should respond_to(:image_url) }
  end
end
