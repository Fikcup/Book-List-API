-- CREATE DATABASE --
DROP DATABASE IF EXISTS booklist;
CREATE DATABASE booklist;

USE booklist;

-- USERS TABLE --
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(25) NOT NULL UNIQUE,
    userPassword VARCHAR(75) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50)
);

-- BOOKS TABLE --
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL
);

-- LISTS TABLE --
CREATE TABLE readinglist (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    listName VARCHAR(30) NOT NULL,
    user VARCHAR(25) NOT NULL,
    bookId INT NOT NULL,
    FOREIGN KEY (user) REFERENCES users(username),
    FOREIGN KEY (bookId) REFERENCES books(id)
);

-- Look into edge cases for username changes. Potentially swap to user ID --