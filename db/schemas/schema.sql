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

-- BOOKS AND AUTHORS TABLE --
CREATE TABLE bookAndAuthor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bookId INT NOT NULL,
    authorId INT NOT NULL,
    FOREIGN KEY (bookId) REFERENCES books(id),
    FOREIGN KEY (authorId) REFERENCES authors(id)
);

-- BOOKS TABLE --
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL
);

-- AUTHORS TABLE --
CREATE TABLE authors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL
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

-- ADD PRIORITY to be implemented --

-- PRIORITY TABLE --
CREATE TABLE priority (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    priority VARCHAR(6) NOT NULL DEFAULT 'medium'
);

-- Look into edge cases for username changes. Potentially swap to user ID --