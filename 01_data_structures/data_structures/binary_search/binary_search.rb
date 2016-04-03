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

def left_most_binary_search(v, arr)
	lower = 0
	upper = arr.size - 1
	while lower <= upper
		mid = lower + (upper - lower) / 2
		return mid if value == arr[mid]
		if value < arr[mid]
			upper = mid # only change needed for left most search 
		else
			lower = mid + 1
		end
	end
	-1
end

# example [1,2,3,4,5] #=> pivot 2 #=> [4,5,1,2,3]
# still sorted, still unique values
def binary_search_in_rotated_array(v, arr)
	lower = 0
	upper = arr.size - 1
	while lower < upper
		mid = lower + (upper - lower) / 2
		if v == arr[mid]
			upper = mid
		elsif arr[lower] <= arr[mid]
			if arr[lower] <= key && key < arr[mid]
				upper = mid
			else
				lower = mid + 1
			end
		elsif arr[mid] <= arr[upper]
			if arr[mid] <= key && key < =arr[upper]
				lower = mid + 1
			else
				upper = mid
			end
		end
	end
	return lower
end

# two method implementation with finding known pivot point
def pivoted_binary_search(val, pivot, arr)
	length = arr.length
	lower = 0
	upper = length - 1
	while lower < upper
		mid = lower + (upper - lower) / 2
		mid_val = arr[(mid + pivot) % length]
		if val < mid_val
			upper = mid
		else
			lower = mid + 1
		end
	end
	return (lower + pivot) % length
end

# method to find pivot point
def find_pivot(arr)
	lower = 0
	upper = arr.size - 1
	while lower < upper
		mid = lower + (upper - lower) / 2
		if arr[lower] <= array[mid]
			break if arr[mid] < arr[upper]
			lower = mid + 1
		else
			upper = mid
		end
	end
	return lower
end







