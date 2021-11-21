-- Up

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE polls (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    multichoice INTEGER DEFAULT 0,
    anonymous_voting INTEGER DEFAULT 1,
    authenticated_voting INTEGER DEFAULT 0,
    anonymous_author INTEGER DEFAULT 1,
    poll_creator INTEGER DEFAULT NULL,
    FOREIGN KEY(poll_creator) REFERENCES users(id)
);

CREATE TABLE poll_options (
    id INTEGER,
    name TEXT,
    poll_id TEXT,
    FOREIGN KEY(poll_id) REFERENCES polls(id)
);

-- Down

DROP TABLE poll_options;
DROP TABLE polls;
DROP TABLE users;

