# davaleba 1
num_1 = int(input("enter your number:"))
num_2 = int(input("enter your another number:"))
print(num_1 + num_2)
print(num_1 - num_2)
print(num_1 * num_2)
print(num_1 / num_2)

#davaleba 2
book_1 = input("enter book name:")
price_1 = float(input("enter the book price:"))
book_2 = input("enter book name:")
price_2 = float(input("enter the book price:"))
book_3 = input("enter book name:")
price_3 = float(input("enter the book price:"))
book_4  = input("enter book name:")
price_4 = float(input("enter the book price:"))
book_5 = input("enter book name:")
price_5 = float(input("enter the book price:"))
discount_tenprocent = (price_1 % 10, price_2 % 10, price_3 % 10, price_4 % 10, price_5 % 10)
print(discount_tenprocent)
book_6  = input("enter book name:")
price_6 = float(input("enter the book price:"))
book_7  = input("enter book name:")
price_7 = float(input("enter the book price:"))
book_8  = input("enter book name:")
price_8 = float(input("enter the book price:"))
book_9  = input("enter book name:")
price_9 = float(input("enter the book price:"))
book_10 = input("enter book name:")
price_10 = float(input("enter the book price:"))
discount_twentyprocent = (price_6 % 20, price_7 % 20, price_8 % 20, price_9 % 20, price_10 % 20)
print(discount_twentyprocent)

#davaleba 3
age1 = int(input("Enetr age of family first member :"))
age2 = int(input("Enter age of family second member :"))
age1 = age1 + 25
age2 = age2 + 25
print("ur first family member age is ", age1, "ur second family member age is", age2)

# #davaleba 4

name = input("Enter your name:")
lastname = input("Enter your lastname:")
age = int(input("Enter your age:"))
residence = input("Enter place of residence:")
profession = input("Enter profession:")
hobby = input("Enter hobby:")

print("შენი სახელი არის", name, "შენი გვარი არის", lastname, "შენი ასაკი არის", age, "შენი საცხოვრებელი ადგილი არის", residence, "შენი პროფესია არის" , profession, "შენი ჰობი არის", hobby)

number = int(input("Enter a random number:"))
# davaleba 5
if number % 2 == 0:
    print("ეს რიცხვი არის ლუწი")
else:
    print("ეს რიცხვი არის კენტი")