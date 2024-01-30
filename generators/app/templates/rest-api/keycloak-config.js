var keycloakConfig = {
    clientId: "<%= clientId %>",
    bearerOnly: true,
    serverUrl: "<%= serverUrl %>",
    realm: "<%= realm %>",
  };
  
  module.exports = {
    keycloakConfig,
  };
  