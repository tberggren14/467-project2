create table Category
(
  CId uniqueidentifier primary key,
  CName nvarchar(33),
  is Deleted bit default 'False' 
  );
  
  create table Location
(
  LId uniqueidentifier primary key,
  LName nvarchar(66),
  is Deleted bit default 'False' 
  );

create table Brand
(
  BId uniqueidentifier primary key,
  BName nvarchar(55),
  is Deleted bit default 'False' 
  );
  
create table Usertab
(
  userId uniqueidentifier primary key,
  firstName nvarchar(47) not null,
  lastName nvarchar(47) not null,
  emailAddress nvarchar(53) not null,
  password text, 
  is Deleted bit default 'False' 
  );
  
  create table item
(
  itemId uniqueidentifier primary key,
  itemName nvarchar(77),
  userId uniqueidentifier foreign key(userId) references Usertab,
  CId uniqueidentifier foreign key(userId) references Category,
  LId uniqueidentifier foreign key(userId) references Location,
  BId uniqueidentifier foreign key(userId) references Brand,
  itemName nvarchar(77),
  itemPrice decimal(10,2) not null,
  itemImageUrl text,
  barcode nvarchar(25),
  itemQuantity int,
  is Deleted bit default 'False' 
  );
  
  
