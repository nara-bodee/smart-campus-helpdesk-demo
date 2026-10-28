import {openDb,seed} from './db.js'; const db=openDb(); seed(db); db.close(); console.log('Database initialized and seeded');
