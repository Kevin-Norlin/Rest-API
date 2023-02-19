const path = require('path');

const paths = {
  '@loginRoute': path.resolve(__dirname, 'server','routes', 'login'),
  '@aboutRoute': path.resolve(__dirname, 'server','routes', 'about'),
  '@userRoute': path.resolve(__dirname, 'server','routes', 'user'), 
  '@shopRoute': path.resolve(__dirname, 'server','routes', 'shop'),
  '@pagenotfoundRoute': path.resolve(__dirname, 'server','routes', 'page-not-found'),

  '@indexRoute': path.resolve(__dirname, 'server','routes', 'index'),
  '@myaccountRoute': path.resolve(__dirname, 'server','routes', 'myaccount'),
  '@database': path.resolve(__dirname, 'server','database'),
  '@views': path.resolve(__dirname,'client','public','views','pages'),
  '@css': path.resolve(__dirname,'client','public','css'),
  '@scripts': path.resolve(__dirname,'client','public','scripts'),
  '@images': path.resolve(__dirname,'client','public','images'),

  

};

module.exports = paths;  