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