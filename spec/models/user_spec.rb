require "rails_helper"

describe User, type: :model do 

  describe "validations" do
    it { should respond_to(:last_name) }
    it { should respond_to(:phone) }
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:international_id) }
  end

  context "When a user is registering" do
    context "When all fields are full" do
      it "Should create the user" do
        user = User.new(first_name: 'Vladimir', last_name: 'Guzman', phone: 31719437, email: "guzman.vla@gmail.com", international_id: "1072647335")

        expect(user.save).to be_truthy
        expect(user.first_name).to eq('Vladimir')
      end
    end
    context "When some field is not full" do
      it "Should not create user" do
        user = User.new(first_name: 'Vla', last_name: 'Guzman', international_id: "1234678")

        expect(user.save).to be_falsey 
        expect(user.errors.messages).to eq({:email=>["can't be blank"]})
      end
    end
  end
end
