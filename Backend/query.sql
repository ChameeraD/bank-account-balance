create database bank;


CREATE TABLE AccountTypes
(
    typeId int,
    name VARCHAR(500),
    intrestRate FLOAT
    PRIMARY KEY(typeId)
);

CREATE TABLE Accounts
(
    accountNumber int,
    typeId int,
    balance float,
    region VARCHAR(500),
    PRIMARY KEY(accountNumber),
    FOREIGN KEY(typeId) REFERENCES AccountTypes(typeId) ON UPDATE CASCADE ON DELETE SET NULL
);



CREATE TABLE Transactions
(
    transactionId int,
    accountNumber int,
    amount float,
    date date,
    type VARCHAR(10),
    PRIMARY KEY(transactionId),
    FOREIGN KEY(accountNumber) REFERENCES Accounts(accountNumber) ON UPDATE CASCADE ON DELETE SET NULL
);



CREATE TABLE Intrests
(
    intrestId int,
    accountNumber int,
    amount float,
    calculatedDate date,
    PRIMARY KEY(intrestId),
    FOREIGN KEY (accountNumber) REFERENCES Accounts(accountNumber) ON UPDATE CASCADE ON DELETE SET NULL 
);


-- DELIMITER $$
-- create procedure addTransaction
-- (
-- in accountNumber int,
-- in transactionId int,
-- in amount float,
-- in date date,
-- in type VARCHAR(10)
-- )
-- begin
-- 	start transaction;
-- 	insert into Transactions values (transactionId,accountNumber ,amount ,date ,type );
--     SET @rowCount = (SELECT ROW_COUNT());
--     if @rowCount=0 then
--     rollback;
--     end if;
    
--     UPDATE Accounts SET balance=balance+amount WHERE accountNumber=accountNumber;
--     SET @rowCount = (SELECT ROW_COUNT());
--     if @rowCount=0 then
--     rollback;
--     end if;
--     commit;
-- end$$
-- DELIMITER ;


-- DELIMITER $$
-- create procedure minusTransaction
-- (
-- in accountNumber int,
-- in transactionId int,
-- in amount float,
-- in date date,
-- in type VARCHAR(10)
-- )
-- begin
-- 	start transaction;
-- 	insert into Transactions values (transactionId,accountNumber ,amount ,date ,type );
--     SET @rowCount = (SELECT ROW_COUNT());
--     if @rowCount=0 then
--     rollback;
--     end if;
    
--     UPDATE Accounts SET balance=balance-amount WHERE accountNumber=accountNumber;
--     SET @rowCount = (SELECT ROW_COUNT());
--     if @rowCount=0 then
--     rollback;
--     end if;
--     commit;
-- end$$
-- DELIMITER ;