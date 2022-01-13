def recursive_search(arr, target)
  # type your code in here
  # if arr.length > 0
  if arr.empty? 
    return false
  else
    if arr.first == target
      return true
    else 
      arr.shift
      recursive_search(arr, target)
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", recursive_search([1, 2, 3], 2)

  puts

  puts "Expecting: false"
  puts "=>", recursive_search([3, 2, 1], 4)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
# if the array is empty, immediately break the loop and return false
# otherwise, see if the first element is the same as the target.
# if it's not, remove that element and try again with the new first element
