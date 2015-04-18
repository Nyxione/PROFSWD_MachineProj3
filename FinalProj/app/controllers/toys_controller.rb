class ToysController < ApplicationController

	def view
		@toys = Toy.all
		
		respond_to do |format|
			format.html # view.html.erb
			format.xml { render :xml => @toys }
		end
	end

end
