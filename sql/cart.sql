CREATE TABLE cart (
    'orderid' INT NOT NULL AUTO_INCREMENT,
    'number' INT NOT NULL,
    'quantity' INT NOT NULL,

    PRIMARY KEY (orderid),
    FOREIGN KEY (number) REFERENCES parts(number)
);