DROP DATABASE IF EXISTS CRPostcodesAPI;

CREATE DATABASE CRPostcodesAPI;

CREATE TABLE provinces(
    province_id bigint NOT NULL,
    province_name varchar(50),
    PRIMARY KEY (province_id)
);

CREATE TABLE counties(
    county_id bigint NOT NULL,
    province_id int, 
    county_name varchar(100)  NOT NULL,
    PRIMARY KEY (county_id),
    CONSTRAINT province_fkey FOREIGN KEY(province_id) REFERENCES provinces(province_id) 
);


CREATE TABLE districts(
    district_id bigint NOT NULL,
    county_id int, 
    district_name varchar(100) NOT NULL,
    PRIMARY KEY (district_id),
    CONSTRAINT county_fkey FOREIGN KEY(county_id) REFERENCES counties(county_id)
);

