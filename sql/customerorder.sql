CREATE TABLE customerorder (
    orderid INT auto_increment,
    name CHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    shipandhandle DECIMAL(9,2) DEFAULT '0.00',
    price DECIMAL(9,2) DEFAULT '0.00',
    weight DECIMAL(9,2) DEFAULT '0.00',
    timeoforder datetime,
    status ENUM('open','closed') DEFAULT 'open'
    PRIMARY KEY(orderid)
);



INSERT INTO customerorder (name, email, address, shipandhandle, price, weight, timeoforder, status)

VALUES
    ('john', 'john@gmail.com', '123 drive' ,'1.00', '1.00', '1.00', now(), 'open'),
    ('frank', 'frank@gmail.com', '456 drive', '2.00', '2.00', '2.00', now(), 'open'),
    ('bob', 'bob@gmail.com', '789 drive', '3.00', '3.00', '3.00', now(), 'open');