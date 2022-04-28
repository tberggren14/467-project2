CREATE TABLE inCart (
    'orderid' INT NOT NULL AUTO_INCREMENT,
    'part_number' INT NOT NULL,
    'quantity' INT NOT NULL,

    PRIMARY KEY ('orderid','part_number'),
    FOREIGN KEY ('customerorder') REFERENCES customerorder('orderid')
);