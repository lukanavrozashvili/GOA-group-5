from turtle import *

#we want to paint a house

#step 1: draw a square

width(7)
color("blue")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing door

forward(70)
color("red")
begin_fill()
left(90)
forward(120) #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("yellow")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(180, 180)
pendown()

color("purple")
right(60)
forward(50)
left(90)
forward(40)
left(90)
forward(50)
left(90)
forward(40)

penup()
goto(155, 180)
pendown()

left(180)
forward(40)

penup()
goto(70, 180)
pendown()

forward(40)
right(90)
forward(50)
right(90)
forward(40)
right(90)
forward(50)

penup()
goto(45, 180)
pendown()

right(90)
forward(40)



exitonclick()