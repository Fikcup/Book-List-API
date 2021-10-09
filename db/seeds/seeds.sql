USE bookList;

-- USERS SEEDS --
INSERT INTO 
    users(username, userPassword, firstName, lastName)
VALUES
    ("JackieReads", "b00kw0rm#3", "Jackie", "LeBlanc");

-- BOOK SEEDS --
INSERT INTO 
    books(title, author)
VALUES
    ("The Hunger Games", "Suzanne Collins"),
    ("Twilight", "Stephanie Meyer"),
    ("The Book Thief", "Markus Zusak"),
    ("To Kill a Mockingbird", "Harper Lee"),
    ("The Chronicles of Narnia", "C.S. Lewis"),
    ("Gone with the Wind", "Margaret Mitchell"),
    ("The Giving Tree", "Shel Silverstein"),
    ("The Picture of Dorian Gray", "Oscar Wilde"),
    ("The Da Vinci Code", "Dan Brown"),
    ("Alice's Adventures in Wonderland", "Lewis Carroll"),
    ("Farenheit 451", "Ray Bradbury"),
    ("The Perks of Being a Wallflower", "Stephen Chbosky"),
    ("Divergent", "Veronica Roth"),
    ("The Great Gatsby", "F. Scott Fitzgerald"),
    ("Harry Potter and the Sorcerer's Stone", "J.K. Rowling"),
    ("Lord of the Flies", "William Golding"),
    ("Crime and Punishment", "Fyodor Dostoevsky"),
    ("Romeo and Juliet", "William Shakespeare"),
    ("City of Bones", "Cassandra Clare"),
    ("Anne of Green Gables", "L.M. Montgomery"),
    ("Ender's Game", "Orson Scott Card"),
    ("Charlotte's Web", "E.B. White"),
    ("The Lightning Thief", "Rick Riordan"),
    ("The Storied Life of A.J. Fikry", "Gabrielle Zevin"),
    ("The Catcher in the Rye", "J.D. Salinger");

-- READING LIST SEEDS --
INSERT INTO 
    readinglist(listName, user, book)
VALUES
    ("Reading List", "JackieReads", "The Lightning Thief");