class Node

	attr_accessor :item, :next

	def initialize(args = {})
		@item = args[:i] || nil
		@next = args[:n] || nil
	end

end

class LifoStack

	attr_accessor :head

	def initialize
		@head = Node.new
	end

	def empty?
		@head.item.nil?
	end

	def push(i)
		@head = Node.new(i: i, n: @head)
	end

	def pop
		item = @head.item
		@head = @head.next
		item
	end
end