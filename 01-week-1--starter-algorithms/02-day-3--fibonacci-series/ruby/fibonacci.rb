def fibonacci(num) 
  # type your code in here
  array = [0,1]
  num.times.with_index(2) { |s, i| array.push(array[i-1] + array[i-2])}
  array[num]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# create array with the first two in the sequence
# create the sequence by beginning at the 3rd index in the array and adding the previous two numbers
# num times
# return the value of the array at the num position
# And a written explanation of your solution

# times allows us to do an operation x times, in this case num times. 
# we begin at the three position because that is the first instance where we can add the previous two numbers
# keep adding new fibonacci numbers to the array until we break out of the loop
# return that number
