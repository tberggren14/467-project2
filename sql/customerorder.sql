CREATE TABLE customerorder (
    'orderid' INT NOT NULL PRIMARY KEY,
    'name' CHAR(30) NOT NULL,
    'email' VARCHAR(255) NOT NULL,
    'address' VARCHAR(255) NOT NULL,
    'shipandhandle' DECIMAL(9,2) DEFAULT '0.00',
    'price' DECIMAL(9,2) DEFAULT '0.00',
    'weight' DECIMAL(9,2) DEFAULT '0.00',
    'date' DATE DEFAULT GETDATE()
    'status' ENUM('open','closed') DEFAULT 'open'
);