class UsersVotesController < ApplicationController
  before_action :set_users_vote, only: %i[ show edit update destroy ]

  # GET /users_votes or /users_votes.json
  def index
    @users_votes = UsersVote.all
  end

  # GET /users_votes/1 or /users_votes/1.json
  def show
  end

  # GET /users_votes/new
  def new
    @users_vote = UsersVote.new
  end

  # GET /users_votes/1/edit
  def edit
  end

  # POST /users_votes or /users_votes.json
  def create
    @users_vote = UsersVote.new(users_vote_params)

    respond_to do |format|
      if @users_vote.save
        format.html { redirect_to users_vote_url(@users_vote), notice: "Users vote was successfully created." }
        format.json { render :show, status: :created, location: @users_vote }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @users_vote.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users_votes/1 or /users_votes/1.json
  def update
    respond_to do |format|
      if @users_vote.update(users_vote_params)
        format.html { redirect_to users_vote_url(@users_vote), notice: "Users vote was successfully updated." }
        format.json { render :show, status: :ok, location: @users_vote }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @users_vote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users_votes/1 or /users_votes/1.json
  def destroy
    @users_vote.destroy

    respond_to do |format|
      format.html { redirect_to users_votes_url, notice: "Users vote was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_vote
      @users_vote = UsersVote.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def users_vote_params
      params.require(:users_vote).permit(:id, :userName)
    end
end
