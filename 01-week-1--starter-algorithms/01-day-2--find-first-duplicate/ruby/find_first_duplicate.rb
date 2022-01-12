def find_first_duplicate(arr)
  return -1 if arr.empty?
  hash = Hash.new(0)
  arr.each do |el|
    hash[el] = hash[el] += 1
    return el if hash[el] > 1
  end
  return -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# return -1 if the array is empty
# create a new hash to track the values of the array with a null value of 0
# add each arr element to the hash with their own keys. each key's value is their frequency 
# if any arr element's key in the hash has a value greater than 1, return that arr element
# if no duplicates are found at the end of the iteration, return -1
