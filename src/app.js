const path = require('path');
const { program } = require('commander');
const env = require('dotenv');
const express = require('express');

require('./config/LOG.config');
const LOG = require('winston');

program.option('--env [ENV]', 'run with this env credentials', 'development');
program.parse(process.argv);
const cmd = program.opts();

LOG.info(`running in ${cmd.env} env`)
env.config({ path: path.join(__dirname, '..', 'env', `.${cmd.env}.env`) });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(/* PORT */ process.env.PORT, () => {
    LOG.info(`server running at http://localhost:${process.env.PORT}`);
});