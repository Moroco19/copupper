class DepartmentsController < ApplicationController
    def create
        department = Department.create!(department_params)
        render json: { department: department }
    end

    private
    def department_params
        params.require(:department).permit(:name)
    end
end
