#MOLDE1
INSERT INTO DIST_USERS VALUES(1,'Thomas@gmail.com','Thomas Wayne');
INSERT INTO DIST_WORKERS VALUES(1,'Gotham city','62', 'wayneenterprise@ask.com', 'Alfred Penworth','(415) 555-2671','butler',1);
INSERT INTO DIST_WORKERS VALUES(2,'Gotham city','23', 'dawes@yahoo.com', 'Rachel Dawes','(415) 555-3592','lawyer',1);

INSERT INTO DIST_USERS VALUES(2,'Clancys@hotmail.com','Thomas Leo Clancy Jr');
INSERT INTO DIST_WORKERS VALUES(3,' Baltimore, Maryland','36', 'echelon@outlook.com', 'Samuel Leo Fisher','(415) 555-2789','Secret Agent',2);


#MOLDE2
INSERT INTO DIST_USERS VALUES(1,'Thomas@gmail.com','Thomas Wayne');
INSERT INTO DIST_WORKERS VALUES(1,'Gotham city','62', 'wayneenterprise@ask.com', 'Alfred Penworth','(415) 555-2671','butler');
INSERT INTO DIST_WORKERS VALUES(2,'Gotham city','23', 'dawes@yahoo.com', 'Rachel Dawes','(415) 555-3592','lawyer');

INSERT INTO DIST_USERS VALUES(2,'Clancys@hotmail.com','Thomas Leo Clancy Jr');
INSERT INTO DIST_WORKERS VALUES(3,' Baltimore, Maryland','36', 'echelon@outlook.com', 'Samuel Leo Fisher','(415) 555-2789','Secret Agent');



/* essa será a tabela a qual eu usarei o metodo get 
   O CRUD eu analisarei como ficará as informaçõees
*/
INSERT INTO ADMINISTRATION VALUES(1,1);
INSERT INTO ADMINISTRATION VALUES(1,2);
INSERT INTO ADMINISTRATION VALUES(2,3);
INSERT INTO ADMINISTRATION VALUES(1,4);
INSERT INTO ADMINISTRATION VALUES(1,5);
INSERT INTO ADMINISTRATION VALUES(2,6);



SELECT * FROM ADMINISTRATION;
SELECT * FROM DIST_USERS;
SELECT * FROM DIST_WORKERS; 


DELETE FROM ADMINISTRATION;
DELETE FROM DIST_USERS;
DELETE FROM DIST_WORKERS; 


/* exemplo de query para deletar os dados de um worker especifico*/
/* pode ser uma procedure */
DELETE FROM ADMINISTRATION WHERE USER_ID = '1'   AND WORKER_ID ='1'; 
DELETE FROM DIST_WORKERS WHERE WORKER_ID   = '1' AND ADMIN_USER_ID='1' ; 

/* exemplo de query para atualizar os dados de um worker especifico*/
/* pode ser uma procedure */
UPDATE DIST_WORKERS SET WORKER_AGE='24' WHERE WORKER_ID   = '2' AND ADMIN_USER_ID='1' ; 



