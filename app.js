const db = require('./utils/database');

db.connect((err) => {
    if(!err)
        console.log('Database is geconnect!');
    else
        console.log('Database connectie niet gelukt!  : '+ JSON.stringify(err, undefined,2));
});