CREATE DATABASE <DB_NAME>;

CREATE TABLE IF NOT EXISTS `enterprise_users` (
    enterprise_user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email_address VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    password VARCHAR(255),
    last_login_timestamp DATETIME,
    failed_login_attempts INTEGER DEFAULT 0,
    last_failed_login_attempt DATETIME
    password_reset_token VARCHAR(255),
    password_reset_token_timestamp DATETIME,
    status VARCHAR(1) NOT NULL DEFAULT 'A'
    created_on_timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by_user VARCHAR(50) NOT NULL DEFAULT 'USER',
    updated_on_timestamp DATETIME ON UPDATE CURRENT_TIMESTAMP,
    updated_by_user VARCHAR(50),
    deleted_on_timestamp DATETIME
);

CREATE TABLE IF NOT EXISTS `enterprise_roles` (
    enterprise_role_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50) NOT NULL,
    role_type VARCHAR(50) NOT NULL
    status VARCHAR(1) NOT NULL DEFAULT 'A'
    created_on_timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by_user VARCHAR(50) NOT NULL DEFAULT 'USER',
    updated_on_timestamp DATETIME ON UPDATE CURRENT_TIMESTAMP,
    updated_by_user VARCHAR(50),
    deleted_on_timestamp DATETIME
);

CREATE TABLE IF NOT EXISTS `enterprise_user_role_xref` (
    enterprise_user_role_xref_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    enterprise_user_id INTEGER NOT NULL,
    enterprise_role_id INTEGER NOT NULL,
    status VARCHAR(1) NOT NULL DEFAULT 'A'
    created_on_timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by_user VARCHAR(50) NOT NULL DEFAULT 'USER',
    updated_on_timestamp DATETIME ON UPDATE CURRENT_TIMESTAMP,
    updated_by_user VARCHAR(50),
    deleted_on_timestamp DATETIME,

    FOREIGN KEY (enterprise_user_id) REFERENCES enterprise_users(enterprise_user_id),
    FOREIGN KEY (enterprise_role_id) REFERENCES enterprise_roles(enterprise_role_id)
);

CREATE TABLE IF NOT EXISTS `code_list_header` (
    code_list_header_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    code_key VARCHAR(100) NOT NULL,
    code_key_description VARCHAR(1000),
    code_key_short_description VARCHAR(500) NOT NULL,
    status VARCHAR(1) NOT NULL DEFAULT 'A'
    created_on_timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by_user VARCHAR(50) NOT NULL DEFAULT 'USER',
    updated_on_timestamp DATETIME ON UPDATE CURRENT_TIMESTAMP,
    updated_by_user VARCHAR(50),
    deleted_on_timestamp DATETIME
);

CREATE TABLE IF NOT EXISTS `code_list_value` (
    code_list_value_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    code_list_header_id INTEGER NOT NULL,
    code_value VARCHAR(50),
    code_value_description VARCHAR(1000),
    code_value_short_description VARCHAR(500) ,
    status VARCHAR(1) NOT NULL DEFAULT 'A'
    created_on_timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by_user VARCHAR(50) NOT NULL DEFAULT 'USER',
    updated_on_timestamp DATETIME ON UPDATE CURRENT_TIMESTAMP,
    updated_by_user VARCHAR(50),
    deleted_on_timestamp DATETIME,

    FOREIGN KEY (code_list_header_id) REFERENCES code_list_header(code_list_header_id)
);