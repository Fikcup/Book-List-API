USE bookList;

-- USERS SEEDS --
INSERT INTO 
    users(username, userPassword, firstName, lastName)
VALUES
    ("JackieReads", "b00kw0rm#3", "Jackie", "LeBlanc");

-- BOOK SEEDS --
INSERT INTO 
    books(title)
VALUES
    ("The Hunger Games"),
    ("Twilight"),
    ("The Book Thief"),
    ("To Kill a Mockingbird"),
    ("The Chronicles of Narnia"),
    ("Gone with the Wind"),
    ("The Giving Tree"),
    ("The Picture of Dorian Gray"),
    ("The Da Vinci Code"),
    ("Alice's Adventures in Wonderland"),
    ("Farenheit 451"),
    ("The Perks of Being a Wallflower"),
    ("Divergent"),
    ("The Great Gatsby"),
    ("Harry Potter and the Sorcerer's Stone"),
    ("Lord of the Flies"),
    ("Crime and Punishment"),
    ("Romeo and Juliet"),
    ("City of Bones"),
    ("Anne of Green Gables"),
    ("Ender's Game"),
    ("Charlotte's Web"),
    ("The Lightning Thief"),
    ("The Storied Life of A.J. Fikry"),
    ("The Catcher in the Rye");

-- AUTHORS SEEDS --
INSERT INTO
    authors(firstName, lastName)
VALUES
    ("Suzanne", "Collines"),
    ("Stephanie", "Meyer"),
    ("Markus", "Zusak"),
    ("Harper", "Lee"),
    ("C.S.", "Lewis"),
    ("Margaret", "Mitchell"),
    ("Shel", "Silverstein"),
    ("Oscar", "Wilde"),
    ("Dan", "Brown"),
    ("Lewis", "Carroll"),
    ("Ray", "Bradbury"),
    ("Stephen", "Chbosky"),
    ("Veronica", "Roth"),
    ("F. Scott", "Fitzgerald"),
    ("J.K.", "Rowling"),
    ("William", "Golding"),
    ("Fyodor", "Dostoevsky"),
    ("William", "Shakespeare"),
    ("Cassandra", "Clare"),
    ("L.M.", "Montgomery"),
    ("Orson Scott", "Card"),
    ("E.B.", "White"),
    ("Rick", "Riordan"),
    ("Gabrielle", "Zevin"),
    ("J.D.", "Salinger");

-- BOOKS AND AUTHORS --
INSERT INTO 
    bookAndAuthor(bookId, authorId)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (11, 11),
    (12, 12),
    (13, 13),
    (14, 14),
    (15, 15),
    (16, 16),
    (17, 17),
    (18, 18),
    (19, 19),
    (20, 20),
    (21, 21),
    (22, 22),
    (23, 23),
    (24, 24);

-- READING LIST SEEDS --
INSERT INTO 
    readinglist(listName, userId, bookId)
VALUES
    ("Reading List", "1", "1"),
    ("Reading List", "1", "2");