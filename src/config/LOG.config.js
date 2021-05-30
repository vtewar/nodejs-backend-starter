const Winston = require('winston');

const log = Winston.createLogger({
    level: +process.env.LOG_LEVEL,
    format: Winston.format.json(),
    transports: [
        new Winston.transports.Console()
    ]
});

Winston.add(log);