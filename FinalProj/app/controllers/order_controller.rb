class OrderController < ApplicationController

	def new
		@order = Order.new
	end
	
	def viewAll
		@orders = Order.all
		
		respond_to do |format|
			format.html # view.html.erb
			format.xml { render :xml => @orders }
		end
	end
	
	def create
		@order = Order.new(order_params)
		if @order.save
			flash[:success] = "Added!"
			redirect_to orders
		else
			render 'toys'
		end
	end

	private
		def order_params
			params.require(:user).permit(:name, :quantity, :price)
		end
end
