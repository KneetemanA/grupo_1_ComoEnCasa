


CREATE DATABASE proyecto;

USE proyecto;

-- Crear tablas
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL,
    discount INT,
    free_shipping BOOLEAN,
    image VARCHAR(255),
    detail TEXT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    user VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    imageProfile VARCHAR(255),
    tic BOOLEAN, 
    role VARCHAR(255)
);

CREATE TABLE infoUsers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    phone VARCHAR(255),
    province VARCHAR(255),
    city VARCHAR(255),
    street VARCHAR(255),
    num INT,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(id)
);


-- ingrdar valores en tablas
INSERT INTO categories (name)
VALUES ('hamburguesa');

INSERT INTO products (name, price, discount, free_shipping, image, detail, category_id)
VALUES ('Clasica Deluxe', 3800, 0, false, '/images/img-1710473828360.avif', 'El más delicioso medallon de carne vacuna con los sabores del queso fundido, lechuga y tomate frescos', 1);

INSERT INTO Users (id, name, user, email, password, imageProfile, tic ,role) 
VALUES (1, 'admin', 'admin', 'admin@gmail.com', '$2b$10$S3fEo82ADbm34sn2NEjvW.qJe9mkNnrVSwOhiYF5t2s13gd7efn56', '/images/default.jpg', true,'admin');

INSERT INTO infoUsers (phone, province, city, street,num,userId) 
VALUES (381123456, 'Tucuman', "Tucuman", 'calle false',123,1);

-- verificar tablas
SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM users;
SELECT * FROM infoUsers;




































select movies.id,title,genre_id,genres.id,name FROM movies INNER JOIN genres ON genre_id = genres.id LIMIT 0, 1000
