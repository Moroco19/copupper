class CopuppersController < ApiController
    before_action :require_login

    def index
        copuppers = Copupper.all
        render json: { copuppers: copuppers }
    end

    def show
        copupper = Copupper.find(params[:id])
        render json: { copupper: copupper }
    end

    def create
        copupper = Copupper.create!(copupper_params)
        render json: { copupper: copupper }
    end

    def update
        copupper = Copupper.find(params[:id])
        copupper.update(copupper_params)
        render json: { copupper: copupper }
    end

    def destroy
        copupper = Copupper.find(params[:id])
        copupper.destroy
        head :ok
    end

    private
    def copupper_params
        params.require(:copupper).permit(:name, :breed, :age, :user_id, :office_id, :department_id)
    end
end
