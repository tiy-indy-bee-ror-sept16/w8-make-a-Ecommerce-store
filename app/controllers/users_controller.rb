class UsersController < ApplicationController

  before_action :require_user

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    @user.cart = Cart.new
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def user_params
    params.permit(:email, :password)
  end

end
