def recursive_count(num = 0)
  # type your code in here
  if num >= 10
    return 
  end
  puts num
  recursive_count(num+1)
end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
