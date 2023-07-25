class FeedbackTablesController < ApplicationController
  before_action :set_feedback_table, only: %i[ show edit update destroy ]

  # GET /feedback_tables or /feedback_tables.json
  def index
    @feedback_tables = FeedbackTable.all
  end

  # GET /feedback_tables/1 or /feedback_tables/1.json
  def show
  end

  # GET /feedback_tables/new
  def new
    @feedback_table = FeedbackTable.new
  end

  # GET /feedback_tables/1/edit
  def edit
  end

  # POST /feedback_tables or /feedback_tables.json
  def create
    @feedback_table = FeedbackTable.new(feedback_table_params)

    respond_to do |format|
      if @feedback_table.save
        format.html { redirect_to feedback_table_url(@feedback_table), notice: "Feedback table was successfully created." }
        format.json { render :show, status: :created, location: @feedback_table }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @feedback_table.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /feedback_tables/1 or /feedback_tables/1.json
  def update
    respond_to do |format|
      if @feedback_table.update(feedback_table_params)
        format.html { redirect_to feedback_table_url(@feedback_table), notice: "Feedback table was successfully updated." }
        format.json { render :show, status: :ok, location: @feedback_table }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @feedback_table.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /feedback_tables/1 or /feedback_tables/1.json
  def destroy
    @feedback_table.destroy

    respond_to do |format|
      format.html { redirect_to feedback_tables_url, notice: "Feedback table was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback_table
      @feedback_table = FeedbackTable.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def feedback_table_params
      params.require(:feedback_table).permit(:firstName, :lastName, :userName, :eventName, :message)
    end
end
