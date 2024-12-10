# JavaScript switch statement without a default case

This repository demonstrates a common error in JavaScript: using a switch statement without a default case. If the operator is not one of the four supported operators, the function will throw an error. This can lead to unexpected behavior and crashes.

The solution is to add a default case that handles the situation when an invalid operator is provided.

## Bug

The bug is in the `calculate` function. The switch statement does not have a `default` case. If the operator is not '+', '-', '*', or '/', the function will throw an error. This can be difficult to debug, especially if the invalid operator is being passed in from an external source.

## Solution

The solution is to add a `default` case to the switch statement. This case will handle the situation when an invalid operator is passed in. The `default` case will return an error message, which will help the user to understand that the provided operator is not valid.