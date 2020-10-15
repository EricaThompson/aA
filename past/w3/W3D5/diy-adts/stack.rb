class Stack
    attr_accessor :stack

    def initialize
        @stack = []
    end

    def push(el)
        @stack.push(el)
    end

    def pop
        @stack.pop
    end

    def peek
        @stack[0]
    end
end

class Queue
    attr_accessor :queue

    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue[0]
    end
    
end

class Map
    attr_accessor :my_map
    def initialize
        @my_map = []
    end

    def set(key, value)
        @my_map << [key, value]
    end

    def get(key)
        @my_map.each do |search|
            if search[0] == key
                return search
            end
        end
    end

    def delete(key)
        @my_map.map! do |search|
            if search[0] == key
                @my_map.delete(search)
            else
                search
            end
        end
    end

    def show
        @my_map
    end

end