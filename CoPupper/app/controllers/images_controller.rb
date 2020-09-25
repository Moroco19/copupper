class ImagesController < ApplicationController
    def create 
        # prevAva = Image.where(is_avatar: true)
        # prevAva.not_avatar
        image = Cloudinary::Uploader.upload(params[:image])
        img = Image.create(url: image["url"], is_avatar: true, copupper_id: params[:copupper_id])
        render json: img
    end
end