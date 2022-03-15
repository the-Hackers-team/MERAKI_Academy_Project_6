DROP DATABASE MERAKI_Academy_Project_6;
CREATE DATABASE MERAKI_Academy_Project_6 ;
USE  MERAKI_Academy_Project_6 ;

CREATE TABLE roles (
id INT AUTO_INCREMENT NOT NULL,
role VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE users(
id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(255),
lastName VARCHAR(255),
age INT(3),
country VARCHAR(255),
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
subscripes INT default 0,
user_image MEDIUMTEXT,
role_id INT,
FOREIGN KEY (role_id) REFERENCES roles(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id),
publish_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE videos (

id INT AUTO_INCREMENT NOT NULL,
title varchar(255),
description TEXT,
user_id INT,
video_link MEDIUMTEXT,
video_views INT DEFAULT 0,
Likes INT DEFAULT 0 NOT NULL,
Dislikes INT DEFAULT 0 NOT NULL,
image MEDIUMTEXT,
FOREIGN KEY (user_id) REFERENCES users(id),
publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
category VARCHAR(20),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE watch_later(
id INT AUTO_INCREMENT NOT NULL,
video_id INT,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (video_id) REFERENCES videos(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE Liked_videos (
id INT AUTO_INCREMENT NOT NULL,
video_id INT,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (video_id) REFERENCES videos(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE comments (
id INT AUTO_INCREMENT NOT NULL,
comment TEXT,
user_id INT,
video_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (video_id) REFERENCES videos(id),
publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE subscriptions (
id INT AUTO_INCREMENT NOT NULL,
chanel_id INT,
user_id INT,
FOREIGN KEY (chanel_id) REFERENCES users(id),
FOREIGN KEY (user_id) REFERENCES users(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
)

-- --------------------------------------------------------

-- CREATE TABLE subscriptions2 (
-- id INT AUTO_INCREMENT NOT NULL,
-- video_id INT,
-- user_id INT,
-- FOREIGN KEY (video_id) REFERENCES videos(id),
-- FOREIGN KEY (user_id) REFERENCES users(id),
-- is_deleted TINYINT DEFAULT 0,
-- PRIMARY KEY (id)
-- )