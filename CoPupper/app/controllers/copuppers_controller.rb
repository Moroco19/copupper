class CopuppersController < ApiController
    before_action :require_login

    def index
        copuppers = Copupper.all
        render json: { copuppers: copuppers }
    end

    def show
        copupper = Copupper.find(params[:id])
        copupper_avatar = Image.where(copupper_id: copupper.id, is_avatar: true)
        render json: { copupper: copupper, avatar: copupper_avatar }
    end

    def create
        copupper = Copupper.new(copupper_params)
        copupper.user = current_user

        if copupper.save
            render json: {
                message: 'ok',
                copupper: copupper,
            }
        else
            render json: {message: 'Could not create a new copupper'}
        end
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
