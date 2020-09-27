class OfficesController < ApiController
    before_action :require_login

    def create
        office = Office.create!(office_params)
        render json: { office: office }
    end

    def index
        offices = Office.all
        render json: { offices: offices }
    end

    def show
        office = Office.find(params[:id])
        render json: { office: office }
    end

    private
    def office_params
        params.require(:office).permit(:name, :street, :city, :state, :zip)
    end
end
