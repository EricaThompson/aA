#O(n^2)
def sluggish_oct(school)
    result = ""
    hash = Hash.new(0)
    school.each do |fish|
        fish.each_char do |char|
            hash[fish] += 1
        end
    end

    highest_count = hash.values.inject do |acc, el|
        if acc > el
            acc
        else
            el
        end
    end

    hash.each do |k, v|
        if v == highest_count
            result += k
        end
    end

    result

end

# p sluggish_oct(['fish', 
# 'fiiish', 
# 'fiiiiish', 
# 'fiiiish', 
# 'fffish', 
# 'ffiiiiisshh', 
# 'fsh', 
# 'fiiiissshhhhhh']) #=> "fiiiissshhhhhh"

class Array
    def arrayizer
        array_of_lengths = []

        self.each do |fish|
            array_of_lengths << fish.length
        end
        array_of_lengths
    end

    def dominant_oct
        
        return self if self.length < 2

        pivot = self[0]

        left = self[1..-1].select {|ele| ele < pivot}
        right = self[1..-1].select {|ele| ele > pivot}

        left.dominant_oct + [pivot] + right.dominant_oct
    end

    def finder 
        largest = self.pop
        result = ""
        self.each do |fish|
            result += fish if fish.length == largest
        end
        result
    end

end


p ['fish', 
'fiiish', 
'fiiiiish', 
'fiiiish', 
'fffish', 
'ffiiiiisshh', 
'fsh', 
'fiiiissshhhhhh'].arrayizer
#=> "fiiiissshhhhhh"