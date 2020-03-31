class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @user = User.new(params)
  end

  def create
    User.create(user_params)
  end

  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end


  def destroy
    User.destroy(params[:id])
  end

  def update
    user = User.find(params[id])
    user.update(user_params)
  end

  private

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :phone, :email, :international_id)
  end
end
