def binary_search(value, array)
	lower = 0
	upper = array.size - 1
	while lower <= upper
		mid = lower + (upper - lower) / 2
		return mid if value == array[mid]
		if value < array[mid]
			upper = mid - 1
		else
			lower = mid + 1
		end
	end
	-1
end