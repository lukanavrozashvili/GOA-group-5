# def findnumber(numbers):
#     smallestnumber = numbers[0]
#     for number in numbers:
#         if smallestnumber > number:
#            smallestnumber = number
#     return smallestnumber
    
# print(findnumber([2,5,4,3,1]))


def findnumber(numbers):
    max_num = numbers[0]
    for number in numbers:
        if max_num < number:
            max_num = number
    return max_num
print(findnumber([2,3,1,6,9,4,12]))

