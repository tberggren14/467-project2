SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: mydb
--

-- --------------------------------------------------------

--
-- Table structure for table brackets
--

CREATE TABLE brackets (
  id int(11) NOT NULL,
  minweight decimal(9,2) DEFAULT 0.00,
  maxweight decimal(9,2) DEFAULT 0.00,
  cost decimal(9,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table brackets
--
ALTER TABLE brackets
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table brackets
--
ALTER TABLE brackets
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO brackets
(id,
minweight,
maxweight,
cost)
VALUES
(1,
0,
5,
4);
INSERT INTO brackets
(id,
minweight,
maxweight,
cost)
VALUES
(2,
5.01,
20,
7);
INSERT INTO brackets
(id,
minweight,
maxweight,
cost)
VALUES
(3,
20.01,
50,
35);
INSERT INTO brackets
(id,
minweight,
maxweight,
cost)
VALUES
(4,
50.01,
100,
120);
INSERT INTO brackets
(id,
minweight,
maxweight,
cost)
VALUES
(5,
100.01,
999.99,
300);
