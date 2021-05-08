------ Users -----
INSERT INTO users ( email, password, fullName, phoneNumber, createdAt, updatedAt)
VALUES ('admin@test.test', '$2a$10$zUM6bKxyDDHPEgaLjshFNOGrsChiAt4/QPs7w3OdWXnvNlxvlt0L6' , 'Administrator',  '9841463272', getdate(), getdate());


------ Categories -----
INSERT INTO product_categories ( name, description, createdAt, updatedAt)
VALUES ('Electronics', 'Electronics item Product Category' , getdate(), getdate());
