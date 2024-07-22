# შექმენით ფუნქცია რომელსაც გადაეცემა სამი სახელი (სამი პარამეტრი) და დაპრინტავს ამ სახელებისგან სიას ( join ან split) გაიხსხენეთ

def my_function(name1, name2, name3):
    names = name1 + " " + name2 + " " + name3
    my_list = names.split()

    print(my_list)

my_function('luka', 'dato', 'saba' )
