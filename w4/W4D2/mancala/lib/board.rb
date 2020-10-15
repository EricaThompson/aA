class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14){Array.new}
    place_stones 
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0..3).each do |i|
        (0...@cups.length).each do |i2|
          @cups[i2] << :stone unless i2 == 6 || i2 == 13
        end
    end

  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > 13
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    #! Hard coded?
    stones = @cups[start_pos]
    @cups[start_pos] = []
    i = start_pos
    until stones.empty?
      i += 1
      i = 0 if i > 13
      if current_player_name == @name1
        @cups[i] << stones.pop unless i == 13
        next
      else
        @cups[i] << stones.pop unless i == 6
        next
      end
    end

    render
    next_turn(i)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_index == 13
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    empty1 = []
    empty2 = []
    i = 0

    while i < @cups.length
      if i.between?(0,5) 
        empty1 << @cups[i]
      elsif i.between?(7,12)
        empty2 << @cups[i]
      end
      i += 1
    end

    return true if empty1.all?{|cup| cup.empty?}
    return true if empty2.all?{|cup| cup.empty?}
    false

  end

  def winner

    if @cups[6] == @cups[13]
      return :draw
    elsif @cups[6].length > @cups[13].length
      return @name1
    else
      return @name2

    end

  end
end
