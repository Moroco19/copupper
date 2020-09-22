class OfficesController < ApplicationController
    def create
        office = Office.create!(office_params)
        render json: { office: office }
    end

    private
    def office_params
        params.require(:office).permit(:name, :street, :city, :state, :zip)
    end
end
