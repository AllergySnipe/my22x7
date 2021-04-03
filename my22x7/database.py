import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database = "dep"
)

mycursor = mydb.cursor()
print(mydb)
mycursor.execute("INSERT INTO arnav(id) VALUES(2)")
mycursor.execute("INSERT INTO arnav(id) VALUES(3)")
mydb.commit()
mycursor.execute("SELECT * FROM arnav")
for x in mycursor:
  print(x)