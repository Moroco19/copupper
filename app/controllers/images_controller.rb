class ImagesController < ApplicationController
    def create 
        prevAva = Image.find_by(is_avatar: true, copupper_id: params[:copupper_id])
        prevAva.not_avatar
        image = Cloudinary::Uploader.upload(params[:image])
        img = Image.create(url: image["url"], is_avatar: params[:is_avatar], copupper_id: params[:copupper_id])
        render json: img
    end
end