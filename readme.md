# Traefik

Bom, a primeira coisa que você precisa saber é *docker*, sabe? 
então let's go!

Traefik é uma ferramenta utilizada para gerenciamento de proxys reversos, é simples, fácil e bem dinâmico.

# Como Usar?
Dentro desse diretório temos um arquivo com extensão **.yml**.

 - **docker-compose.yaml**

é esse cara que iremos utilizar.

# Up 

Para subir a aplicação siga o simples procedimento.

```docker-compose up -d```

automaticamente a aplicação começará a baixar suas respectivas dependências e em breve você poderá acessar o traefik na porta 8080.

esse dashboard apresentado você poderá gerenciar todas as aplicações e serviços que estão utilizando o seu proxy reverso.

para testar é simples, modifique seu /etc/hosts e o arquivo .env localizado na raiz do projeto com o host personalizado.

ex: app.node.local

agora se acessar a URL notará que a mesma também é acessível pelo host.
 

# Importante

lembre de mudar as variáveis e as portas do seu arquivo **docker-compose** caso queira.

    web:
    image:  "node:12"
    labels:
    -  "traefik.http.routers.api-crm.rule=Host(`${URL_PROXY_REVERSE}`)"
    -  "traefik.http.services.api-crm.loadbalancer.server.port=3000"
    -  "traefik.docker.network=traefik"

Cada linha possui uma responsabilidade, a primeira do label é o host que sua aplicação terá.
a segunda será a porta do loadbalance, no caso, a porta interna que o container está rodando, atente-se, é a INTERNA.
e por ultimo a rede do traefik.

Dúvidas? 

[https://t.me/leolegends](https://t.me/leolegends)
