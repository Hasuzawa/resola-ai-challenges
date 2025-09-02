create table log (
	user_id int,
	session varchar(256),
	action Action,
	resource_type varchar(256),
	resource_id varchar(256),
	timestamp datetime,
	ip_address varchar(256),
	user_agent varchar(256),
	metadata varchar(256),
	severity Severity
);
