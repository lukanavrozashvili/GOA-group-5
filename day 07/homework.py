#ბილეთი ღირს 25 ლარი,
#მაგრამ ბავშვებისთვის უფასოა,
#გვყავს 13 ადამიანი, აქედან 10 დიდი და 3 ბავშვი, 
#გამოთვალეთ ჯამში რამდენი ლარი დასჭირდებათ

ticket = 25
user_age = int(input("Enter Your Age: "))
adult = int(input("input the number of adults: "))
children = int(input("enter the number of children"))

if user_age > 18:
    print("ჯამში დასჭირდებათ " + str(ticket * adult) + " ლარის ბილეთი") 
else:
    print(0)

