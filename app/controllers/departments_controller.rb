class DepartmentsController < ApiController
    before_action :require_login

    def create
        department = Department.create!(department_params)
        render json: { department: department }
    end

    def index
        departments = Department.all
        render json: { departments: departments }
    end

    def show
        department = Department.find(params[:id])
        render json: { department: department }
    end

    private
    def department_params
        params.require(:department).permit(:name)
    end
end
