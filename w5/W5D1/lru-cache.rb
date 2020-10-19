class LRUCache
    def initialize(n)
        @n = n
        @cache = []
    end

    def count
      # returns number of elements currently in cache
        @cache.count
    end

    def add(el)
      # adds element to cache according to LRU principle
        if @cache.include?(el) #if el is already there
            @cache.delete(el) #delete el since el will be moved to the front
            @cache << el #here
        elsif count >= @n #if the cache is full
            @cache.shift #remove the LRU, or oldest element
            @cache << el #and now el will be the newest element
        else
            @cache << el #else make it most recent
        end    
    end

    def show
      # shows the items in the cache, with the LRU item first
        p @cache
    end

    private
    # helper methods go here!

  end