def uc_bes(n):
	results = []
	for iter in range(1,n+1):
		result = ""
		if iter % 3 == 0:
			result += "Fizz"
		if iter % 5 == 0:
			result += "Buzz"
		if result == "":
			result = str(iter)
		results.append(result)
	return results