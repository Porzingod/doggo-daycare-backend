class Api::V1::DogsController < ApplicationController
  def index
    byebug
    @dogs = Dog.where(user_id: params(:user_id))
  end
end
