def reverse_string(str)
  # type your code in here
  new_string = ''
  str.chars.each do |letter|
    new_string = letter + new_string
  end
  new_string
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# create an empty string
# for each character in the original string, prepend it to the new string
# return the new string