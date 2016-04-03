class Node

	attr_accessor :item, :next

	def intialize(args = {})
		@item = args[:i] || nil
		@next = args[:n] || nil
	end

end

class FifoQueue

	def initialize
		@head = nil
		@tail = nil
	end

	def empty?
		@head.nil?
	end

	def push(i)
		if @tail
			@tail.next = Node.new(i:i)
			@tail = @tail.next
		end
		@head = @tail = Node.new(i:i)
	end

	def pop
		unless @head
			raise RuntimeError.new('No items in Queue')
		end
		result = @head.item
		@head = @head.next
		@tail = nil unless @head
		result
	end

end