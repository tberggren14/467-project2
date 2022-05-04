drop table `brackets`

CREATE TABLE `brackets` 
  `id` int(11) NOT NULL PRIMARY KEY,
  `minweight` DECIMAL(9.2) DEFAULT 0.00,
  `maxweight` DECIMAL(9.2) DEFAULT 0.00,
  `cost` DECIMAL(9.2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=latin1;*/

INSERT INTO `csci467`.`brackets`
(`id`,
`minweight`,
`maxweight`,
`cost`)
VALUES
(1,
0,
50,
30);
INSERT INTO `csci467`.`brackets`
(`id`,
`minweight`,
`maxweight`,
`cost`)
VALUES
(1,
50.01,
100,
60);
INSERT INTO `csci467`.`brackets`
(`id`,
`minweight`,
`maxweight`,
`cost`)
VALUES
(1,
100.01,
150,
90);
INSERT INTO `csci467`.`brackets`
(`id`,
`minweight`,
`maxweight`,
`cost`)
VALUES
(1,
150.01,
200,
120);
INSERT INTO `csci467`.`brackets`
(`id`,
`minweight`,
`maxweight`,
`cost`)
VALUES
(1,
200.01,
999.99,
300);