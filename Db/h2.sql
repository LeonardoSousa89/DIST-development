
QUERY PARA H2

----------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO DIST_USERS VALUES(1,'Thomas@gmail.com','Thomas Wayne');
INSERT INTO DIST_USERS VALUES(2,'Clancys@hotmail.com','Thomas Leo Clancy Jr');

INSERT INTO DIST_WORKERS VALUES(1,'Gotham city','62', 'wayneenterprise@ask.com', 'Alfred Penworth','(415) 555-2671','butler',1);
INSERT INTO DIST_WORKERS VALUES(2,'Gotham city','23', 'dawes@yahoo.com', 'Rachel Dawes','(415) 555-3592','lawyer',1);
INSERT INTO DIST_WORKERS VALUES(3,' Baltimore, Maryland','36', 'echelon@outlook.com', 'Samuel Leo Fisher','(415) 555-2789','Secret Agent',2);


SELECT * FROM DIST_USERS;
SELECT * FROM DIST_WORKERS; 

DELETE FROM DIST_USERS;
DELETE FROM DIST_WORKERS; 

SELECT  W.WORKER_ID,
 	W.WORKER_ADDRESS,
	W.WORKER_AGE,
	WORKER_EMAIL,
	WORKER_NAME,
	WORKER_PHONE_NUMBER ,
	WORKER_POST      	
FROM DIST_USERS U
INNER JOIN DIST_WORKERS W
ON U.USER_ID=W.USER_ID
WHERE U.USER_ID='1';

SELECT  W.WORKER_ID,
 	W.WORKER_ADDRESS,
	W.WORKER_AGE,
	WORKER_EMAIL,
	WORKER_NAME,
	WORKER_PHONE_NUMBER ,
	WORKER_POST      	
FROM DIST_USERS U
INNER JOIN DIST_WORKERS W
ON U.USER_ID=W.USER_ID
WHERE U.USER_ID='2';

DELETE FROM DIST_WORKERS WHERE WORKER_ID   = '1' AND ADMIN_USER_ID='1' ; 

UPDATE DIST_WORKERS SET WORKER_AGE='24' WHERE WORKER_ID   = '2' AND ADMIN_USER_ID='1' ; 
----------------------------------------------------------------------------------------------------------------------------------------------





QUERY PARA POSTGRES

----------------------------------------------------------------------------------------------------------------------------------------------
CREATE DATABASE distproject;
\c distproject

CREATE TABLE IF NOT EXISTS dist_users(
	userId SERIAL PRIMARY KEY,
	name VARCHAR(100),
	email VARCHAR(100) UNIQUE
);

DROP TABLE dist_users;

CREATE TABLE IF NOT EXISTS dist_workers(
	workerId SERIAL PRIMARY KEY,
 	workerName VARCHAR(100) NOT NULL,
	workerEmail VARCHAR(100) UNIQUE NOT NULL,
	workerPost VARCHAR(100) NOT NULL,
	workerAddress VARCHAR(100) NOT NULL,
	workerPhoneNumber VARCHAR(100)NOT NULL,
	workerAge VARCHAR(100) NOT NULL,
	user_Id INT,
	FOREIGN KEY(user_Id) REFERENCES dist_users(userId)
);

DROP TABLE dist_workers;


INSERT INTO dist_users VALUES(1, 'Thomas Wayne', 'Thomas@gmail.com');
INSERT INTO dist_users VALUES(2, 'Thomas Leo Clancy Jr','Clancys@hotmail.com');
INSERT INTO dist_users VALUES(3, 'Jim Lee','dccomics@hotmail.com');


INSERT INTO dist_workers VALUES(1, 'Alfred Penworth', 'wayneenterprise@ask.com', 'butler', 'Gotham city', '(415) 555-2671','62' ,1);
INSERT INTO dist_workers VALUES(2, 'Rachel Dawes',  'dawes@yahoo.com', 'lawyer','Gotham city', '(415) 555-3592', '23', 1);
INSERT INTO dist_workers VALUES(3, 'Dr. Curtis "Curt" Connors', 'connor@outlook.com', 'scientist', 'Manhattan, New York', '(415) 555-6655', '46', 1);
INSERT INTO dist_workers VALUES(4, 'Gwendolyn Maxine Stacy', 'stacy@outlook.com', 'trainee', 'Manhattan, New York', '(415) 555-8899', '23', 1);
INSERT INTO dist_workers VALUES(5, 'Mary Jane Watson', 'jane@outlook.com', 'actress', 'Brooklyn, New York', '(415) 555-2355', '22', 1);
INSERT INTO dist_workers VALUES(6, 'J. J. Jameson', 'daylebugle@outlook.com', 'executive', 'Manhattan, New York', '(415) 555-8588', '47', 1);
INSERT INTO dist_workers VALUES(7, 'Ben parker', 'parkerfamilyben@outlook.com', 'seller', 'Brooklyn, New York', '(415) 555-6598', '61', 1);
INSERT INTO dist_workers VALUES(8, 'May parker', 'parkerfamilymay@outlook.com', 'seller', 'Brooklyn, New York', '(415) 555-6598', '54', 1);
INSERT INTO dist_workers VALUES(9, 'Peter parker', 'parkerfamilypeter@outlook.com', 'photographer', 'Brooklyn, New York', '(415) 555-6598', '22', 1);
INSERT INTO dist_workers VALUES(10, 'Barry white', 'dayleplanet@outlook.com', 'jornalist', 'Metropolis', '(415) 555-0233', '54', 1);
INSERT INTO dist_workers VALUES(1, 'Alfred Penworth', 'wayneenterprise@ask.com', 'butler', 'Gotham city', '(415) 555-2671','62' ,1);

INSERT INTO dist_workers VALUES(15, 'Rachel Dawes',  'dawes@yahoo.com', 'lawyer','Gotham city', '(415) 555-3592', '23', 1);
INSERT INTO dist_workers VALUES(16, 'Dr. Curtis "Curt" Connors', 'connor@outlook.com', 'scientist', 'Manhattan, New York', '(415) 555-6655', '46', 1);
INSERT INTO dist_workers VALUES(17, 'Gwendolyn Maxine Stacy', 'stacy@outlook.com', 'trainee', 'Manhattan, New York', '(415) 555-8899', '23', 1);
INSERT INTO dist_workers VALUES(18, 'Mary Jane Watson', 'jane@outlook.com', 'actress', 'Brooklyn, New York', '(415) 555-2355', '22', 1);
INSERT INTO dist_workers VALUES(19, 'J. J. Jameson', 'daylebugle@outlook.com', 'executive', 'Manhattan, New York', '(415) 555-8588', '47', 1);
INSERT INTO dist_workers VALUES(20, 'Ben parker', 'parkerfamilyben@outlook.com', 'seller', 'Brooklyn, New York', '(415) 555-6598', '61', 1);
INSERT INTO dist_workers VALUES(21, 'May parker', 'parkerfamilymay@outlook.com', 'seller', 'Brooklyn, New York', '(415) 555-6598', '54', 1);
INSERT INTO dist_workers VALUES(22, 'Peter parker', 'parkerfamilypeter@outlook.com', 'photographer', 'Brooklyn, New York', '(415) 555-6598', '22', 1);
INSERT INTO dist_workers VALUES(23, 'Barry white', 'dayleplanet@outlook.com', 'jornalist', 'Metropolis', '(415) 555-0233', '54', 1);


INSERT INTO dist_workers VALUES(11, 'Samuel Leo Fisher', 'echelon@outlook.com', 'Secret Agent', 'Baltimore, Maryland', '(415) 555-2789', '36', 2);

INSERT INTO dist_workers VALUES(12, 'Frank Miller', 'millercomics@outlook.com', 'writter/drawer', 'Olney, Maryland', '(415) 555-8974', '65', 3);
INSERT INTO dist_workers VALUES(13, 'Alan More', 'watchmenseries@ask.com', 'writter', 'Northampton, United Kingdom', '(415) 555-8745', '68', 3);
INSERT INTO dist_workers VALUES(14, 'Todd McFarlane', 'spiderman90@marvel.com', 'drawer', 'Calgary, Canada', '(415) 555-7877', '61', 3);

DELETE FROM dist_users;
DELETE FROM dist_workers;

SELECT * FROM dist_users;
SELECT * FROM dist_workers;	


/* user 1 */
/*pagnation query */
SELECT  w.workerId,
 	w.workerName ,
	w.workerEmail,
	w.workerPost, 
	w.workerAddress,
	w.workerPhoneNumber,
	w.workerAge 	
FROM dist_users u
INNER JOIN dist_workers w
ON u.userId =w.user_id
WHERE u.userId ='1'
LIMIT 5;

SELECT  w.workerId,
 	w.workerName ,
	w.workerEmail,
	w.workerPost, 
	w.workerAddress,
	w.workerPhoneNumber,
	w.workerAge 	
FROM dist_users u
INNER JOIN dist_workers w
ON u.userId =w.user_id
WHERE u.userId ='1'
LIMIT 5 OFFSET 5;
/*pagnation query */


/* user 2 */
SELECT  w.workerId,
 	w.workerName ,
	w.workerEmail,
	w.workerPost, 
	w.workerAddress,
	w.workerPhoneNumber,
	w.workerAge 	
FROM dist_users u
INNER JOIN dist_workers w
ON u.userId =w.user_id
WHERE u.userId ='2';


/* user 3 */
SELECT  w.workerId,
 	w.workerName ,
	w.workerEmail,
	w.workerPost, 
	w.workerAddress,
	w.workerPhoneNumber,
	w.workerAge 	
FROM dist_users u
INNER JOIN dist_workers w
ON u.userId =w.user_id
WHERE u.userId ='3';

select * from dist_workers LIMIT 5;
select * from dist_workers LIMIT 5 OFFSET 5;

----------------------------------------------------------------------------------------------------------------------------------------------





RDS

----------------------------------------------------------------------------------------------------------------------------------------------

As configuraçãoes de conexão estarão na area-de-trabalho na pasta db, já foi aberta conexão via server com pgAdmin.


obs* o database da AMAZON só possui 7 dias grátuitos de db, a cada 6 dias alterar o banco.

distproject - criado 04-11 as 19:38
	      destruição 10-11
----------------------------------------------------------------------------------------------------------------------------------------------

