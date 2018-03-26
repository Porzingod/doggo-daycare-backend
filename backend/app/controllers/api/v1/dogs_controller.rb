class Api::V1::DogsController < ApplicationController
  def index
    @dogs = Dog.where("user_id = :user_id", {user_id: params[:user_id]})
    render json: @dogs
  end
end
