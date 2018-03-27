class Api::V1::DogsController < ApplicationController
  def index
    @dogs = Dog.where("user_id = :user_id", {user_id: params[:user_id]})
    render json: @dogs
  end

  def create
    @dog = Dog.create(dog_params)
    render json: @dog
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :happiness, :hunger, :thirst, :poopy, :pipi, :color, :user_id)
  end
end
