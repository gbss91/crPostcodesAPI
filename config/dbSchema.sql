DROP DATABASE IF EXISTS CRPostcodesAPI;

CREATE DATABASE CRPostcodesAPI;

CREATE TABLE provinces(
    province_id int NOT NULL,
    province_name varchar(50),
    PRIMARY KEY (province_id)
);

CREATE TABLE counties(
    county_id int NOT NULL,
    province_id int, 
    county_name varchar(100)  NOT NULL,
    PRIMARY KEY (county_id),
    CONSTRAINT province_fkey FOREIGN KEY(province_id) REFERENCES provinces(province_id) 
);


CREATE TABLE districts(
    district_id int NOT NULL,
    county_id int, 
    district_name varchar(100) NOT NULL,
    postcode int NOT NULL,
    PRIMARY KEY (district_id),
    CONSTRAINT county_fkey FOREIGN KEY(county_id) REFERENCES counties(county_id)
);

-- Create a view to show all necesary postcode information 
CREATE VIEW postcode_information AS
SELECT provinces.province_name, counties.county_name, districts.district_name, districts.postcode 
FROM districts
JOIN counties ON districts.county_id = counties.county_id
JOIN provinces ON counties.province_id = provinces.province_id
ORDER BY postcode ASC;
