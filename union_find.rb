class UnionFindQuickUnion

	attr_accessor :id

	def initialize(n)
		@id = *(0..n)
		@sz = *(0..n)
	end

	def connected?(p, q)
		return @id[p] == @id[q]
	end

	def root(i)
		while i != @id[i]
			@id[i] = @id[@id[i]] #path compression
			i = @id[i]
		end
		return i
	end

	def union(p, q)
		i = root(p)
		j = root(q)
		# @id[i] = j <- non-weighted
		return if i == j# weighted QU
		if @sz[i] < @sz[j]
			@id[i] = j
			@sz[j] += @sz[i]
		else
			@id[j] = i
			@sz[i] += @sz[j]
		end 
	end
end

def assemble_data
	f = File.open('uf_data.txt')
	f.readlines[0..-2]
end

def sanitize(a)
	a.map!{|p| p.split(' ').map!{|n| n.to_i}}
end

data = sanitize(assemble_data)
uf = UnionFindQuickUnion.new(9)
data.each {|d| uf.union(d[0],d[1])}
