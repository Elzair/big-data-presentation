var opts = {
  port: process.env.PORT || process.env.OPENSHIFT_NODEJS_POART || 1948,
  ipAddr: process.env.IP_ADDR || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  web_host: process.env.REVEAL_WEB_HOST || process.env.OPENSHIFT_APP_DNS || 'localhost:1948',
  socket_host: process.env.REVEAL_SOCKET_HOST || process.env.OPENSHIFT_APP_DNS || 'localhost',
  socket_secret: process.env.REVEAL_SOCKET_SECRET
};
