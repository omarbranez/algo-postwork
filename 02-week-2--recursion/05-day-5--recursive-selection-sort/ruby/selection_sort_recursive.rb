def selection_sort_recursive(arr)
  # type your code in here
  # base case if array is empty
  if arr.empty?
    return []
  end

  # get the smallest number in the array
  minimum = arr.min
  # and the index of the FIRST occurrence
  index = arr.index(minimum)
  # delete it from the input array and return that value
  # arr.delete_at(index)

  ## delete removes duplicates, so that doesnt work
  ## arr.delete(minimum)

  # create a new array to hold the sorted values 
  sorted = selection_sort_recursive(arr)
  # push each minimum value into the sorted array until the input array is empty
  sorted.unshift(minimum)
  
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort_recursive([3, -1, 5, 2])

  puts

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
