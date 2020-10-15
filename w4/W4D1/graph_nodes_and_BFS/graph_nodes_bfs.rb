class GraphNode
    attr_accessor :neighbors, :value

    def initialize(value)
        self.value = value
        self.neighbors = []
    end

    def add_neighbors=(node)
        self.neighbors << node
    end
end

# def bfs(starting_node, target_value)
#     checked_nodes = Set.new() 
#     #creates a collection of unordered values with no duplicates, necessary for a bi-directional tree where you could end in a loop if you keep trying to go to the neighbors
#     queue = [starting_node] #starting with the input, the search will happen from the queue FIFO

#     until queue.empty? #search begins 1.from the queue.length = 1
#         current = queue.shift #grabs the current node we are working on, will be the FI 1. org starting_node
#         unless checked_nodes.include?(current) # if we haven't already tried it, makes sure we don't hit a loop. 1. empty set, 
#             return current if current.value == target_value #now we check the value, return it if it is the same
#             checked_nodes.add(current) #if check failed, add it to the checked values
#             queue += current.neighbors #add the neighbors to the queue and start the until loop again
#         end
#     end
#     return nil #the queue will keep shifting off unique values and if it entirely empties then we'll return nil.
# end

def bfs(starting_node, target_value)
    queue = [starting_node]
    checked_nodes = Set.new

    until queue.empty?
        current = queue.shift
        unless checked_nodes.include?(current)
            checked_nodes.add(current)
            return current if current.value == target_value
            queue += current.neighbors
        end
    end
    nil
end
    

    











    #take the starting node, check its children, check its children's children
    # return starting_node if starting_node.value == target_value
    # if !starting_node.neighbors.empty?
    #     starting_node.neighbors.each do | neighbor |
    #         checked_nodes << neighbor
    #         return neighbor if neighbor.value == target_value
    #         if !neighbor.neighbors.empty?
    #             neighbor.each do |next_neighbor|
    #                 if next_neighbor == target_value && !checked_nodes.include?(next_neighbor)
    #                     return next_neighbor
    #                 else
    #                     if !next_neighbor.neighbors.empty?
    #                         next_neighbor.neighbors.each do |next_next_neighbor|
    #                             return next_next_neighbor if next_next_neighbor.value == target_value && !checked_nodes.include?(next_next_neighbor)
    #                         end
    #                     end
    #                 end
    #             end
    #         end 
    #     end
    # end
# end


p a = GraphNode.new('a')
p b = GraphNode.new('b')
p c = GraphNode.new('c')
p d = GraphNode.new('d')
p e = GraphNode.new('e')
p f = GraphNode.new('f')
p a.neighbors = [b, c, e]
p c.neighbors = [b, d]
p e.neighbors = [a]
p f.neighbors = [e]