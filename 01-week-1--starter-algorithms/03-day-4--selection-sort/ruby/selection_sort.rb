def selection_sort(arr)
  # type your code in here
  (arr.length - 1).times do |element_index_to_check|
    current_min_index = element_index_to_check + 1
    element_index_to_check.upto(arr.length - 1) do |left_num_index|
      if arr[left_num_index] < arr[current_min_index]
        current_min_index = left_num_index
      end
    end
    temp_left_num = arr[current_min_index]
    arr[current_min_index] = arr[element_index_to_check]
    arr[element_index_to_check] = temp_left_num
  end
    arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
# arr length - 1 ignores zero. this is how many times we have to run this iteration
# assume the second number is the minimum and store it as a temporary variable
# check from the 0 index and work to the right
# if the latter number is less than the former number
# set that latter number as the current minimum between the two
# store the value of the second element
# replace it with the new smallest
# And a written explanation of your solution
