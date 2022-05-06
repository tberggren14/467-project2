CREATE TABLE item ( 
itemid INT auto_increment, 
itemname CHAR(30) NOT NULL, 
email VARCHAR(255) NOT NULL, 
address VARCHAR(255) NOT NULL, 
inventory DECIMAL(9,2) DEFAULT '0.00', 
price DECIMAL(9,2) DEFAULT '0.00', 
weight DECIMAL(9,2) DEFAULT '0.00',
 timeoforder datetime, 
 status ENUM('open','closed') DEFAULT 'open', 
PRIMARY KEY(itemid) 
);
  
