create type Severity as enum (
	'INFO',
	'WARNING',
	'ERROR',
	'CRITICAL'
);

create type Action as enum (
	'CREATE',
	'UPDATE',
	'DELETE',
	'VIEW'
);
