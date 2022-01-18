def balancing_parentheses(string)
  # type your code in here
  end_count = 0
  opening_count = 0
  string.chars.each do |char|
    if char == '('
      opening_count += 1
      next
    end

    if opening_count > 0 
      opening_count -= 1
    else
      end_count += 1
    end
  end

  end_count + opening_count
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
