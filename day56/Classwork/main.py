# 1. def litres(time):
#     return int(time * 0.5)


# 2. def paperwork(n, m):
#     if n < 0 or m < 0:
#         return 0
#     return m * n

# 3. def grow(arr):
#     result = 1
#     for num in arr:
#         result *= num
#     return result

# 4. def fake_bin(x):
#     y = ''
#     for number in x:
#         if int(number) < 5:
#             y += '0'
#         else:
#             y += '1'
#     return y

# 5. def count_by(x, n):
#     return [i * x for i in range(1, n + 1)]

# 6. def to_jaden_case(string):
#     return ' '.join(x.capitalize() for x in string.split())

# 7. def accum(st):
#     index = 1 
#     result = [] 
#     for l in st: 
#         l = l * index 
#         l = l.capitalize()
#         index += 1
#         result.append(l)
#     return "-".join(result)




# 8. def remove_smallest(numbers):    
#     x = list(numbers)
#     if x:
#         x.remove(min(numbers))
#     return x