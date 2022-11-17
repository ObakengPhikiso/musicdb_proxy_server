# Obakeng Phikiso ExpressJs Proxy server for Deezer api

This server is deployed to vercel and has only limited api endpoints which I have listed below: [GitHub repo](https://github.com/ObakengPhikiso/musicdb_proxy_server)

## Following are available endpoints

 [/v1/search/artists/eminem](https://musicdb-proxy-server.vercel.app/v1/search/artists/eminem)
    This api will return list of artists that relates to the name provided

 [/v1/artists/{userId}](https://musicdb-proxy-server.vercel.app/v1/artists/{userId})
    A list of artists that belong to a specific user will be returned

[ /v1/artist/{id}](https://musicdb-proxy-server.vercel.app/v1/artist/{id})
    Returns an artist associated with the specified id

[ /v1/artist/{id}/top](https://musicdb-proxy-server.vercel.app/v1/artist/{id}/top)
    Return a list of top 5 tracks that belong to an artist

[/v1/artist/{id}/albums](https://musicdb-proxy-server.vercel.app/v1/artist/{id}/albums)
    Return a list of albums that belong to an artist

