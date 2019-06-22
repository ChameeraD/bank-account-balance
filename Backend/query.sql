-- -- create database bank;


-- -- CREATE TABLE AccountTypes
-- -- (
-- --     typeId int,
-- --     name VARCHAR(500),
-- --     intrestRate FLOAT
-- --     PRIMARY KEY(typeId)
-- -- );

-- -- CREATE TABLE Accounts
-- -- (
-- --     accountNumber int,
-- --     typeId int,
-- --     balance float,
-- --     region VARCHAR(500),
-- --     PRIMARY KEY(accountNumber),
-- --     FOREIGN KEY(typeId) REFERENCES AccountTypes(typeId) ON UPDATE CASCADE ON DELETE SET NULL
-- -- );



-- -- CREATE TABLE Transactions
-- -- (
-- --     transactionId int not null AUTO_INCREMENT=0,
-- --     accountNumber int,
-- --     amount float,
-- --     date date,
-- --     type VARCHAR(10),
-- --     balance float,
-- --     PRIMARY KEY(transactionId),
-- --     FOREIGN KEY(accountNumber) REFERENCES Accounts(accountNumber) ON UPDATE CASCADE ON DELETE SET NULL
-- -- );



-- -- CREATE TABLE Intrests
-- -- (
-- --     intrestId int,
-- --     accountNumber int,
-- --     amount float,
-- --     calculatedDate date,
-- --     PRIMARY KEY(intrestId),
-- --     FOREIGN KEY (accountNumber) REFERENCES Accounts(accountNumber) ON UPDATE CASCADE ON DELETE SET NULL 
-- -- );


-- DELIMITER $$
-- create procedure addTransaction
-- (
-- in accNumber int,
-- in amount float,
-- in date date,
-- in type VARCHAR(10)
-- )
-- begin
-- 	start transaction;
    
--     set @previousBalance = (select balance from Accounts where accountNumber=accNumber);

--     set @newBalance=(@previousBalance+amount);
-- 	insert into Transactions(accountNumber,amount,date,type,balance) values (accNumber ,amount ,date ,type,@newBalance);
--     SET @rowCount = (SELECT ROW_COUNT());
--     if @rowCount=0 then
--     rollback;
--     end if;
    
--     UPDATE Accounts SET balance=@newBalance WHERE accountNumber=accNumber;
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
-- in accNumber int,
-- in amount float,
-- in date date,
-- in type VARCHAR(10)
-- )
-- begin
-- 	start transaction;
    
--     set @previousBalance = (select balance from Accounts where accountNumber=accNumber);

--     set @newBalance=(@previousBalance-amount);
-- 	insert into Transactions(accountNumber,amount,date,type,balance) values (accNumber ,amount ,date ,type,@newBalance);
--     SET @rowCount = (SELECT ROW_COUNT());
--     if @rowCount=0 then
--     rollback;
--     end if;
    
--     UPDATE Accounts SET balance=@newBalance WHERE accountNumber=accNumber;
--     SET @rowCount = (SELECT ROW_COUNT());
--     if @rowCount=0 then
--     rollback;
--     end if;
--     commit;
-- end$$
-- DELIMITER ;