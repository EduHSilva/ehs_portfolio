# Portfólio — Eduardo Henrique da Silva

Site pessoal em **HTML, CSS e JavaScript puros**, sem framework e sem etapa de build,
seguindo o mesmo padrão de design e publicação dos demais projetos `ehs_*`.

- Site: `/app/portfolio/` (via nginx dos microservices)
- Imagem: `ghcr.io/eduhsilva/portfolio-ui`
- Tema claro/escuro e idioma PT/EN persistidos em `localStorage`
- Aba de projetos com filtros por categoria (web, mobile, backend)

## Estrutura

```
web/
  index.html            página única (todas as seções)
  robots.txt
  assets/css/styles.css design system e layout
  assets/js/data.js     lista de projetos
  assets/js/i18n.js     dicionários PT/EN
  assets/js/main.js     tema, idioma, menu, filtros, scroll
  assets/img/favicon.svg
docker/nginx/default.conf configuração do nginx
scripts/verify.mjs      verificação estática (CI)
Dockerfile              imagem nginx com os arquivos estáticos
docker-compose.yaml     execução local
docker-compose.prod.yml execução com imagem publicada
```

## Desenvolvimento

Não há dependências nem build. Sirva a pasta `web/` com qualquer servidor estático:

```bash
cd web
python -m http.server 3000
# ou: npx serve -l 3000 .
```

Acesse `http://localhost:3000/`.

Os caminhos de assets são relativos, então o mesmo conteúdo funciona tanto na raiz
quanto em `/app/portfolio/`.

### Verificação

```bash
node scripts/verify.mjs
```

Valida arquivos obrigatórios, chaves de tradução, ícones do sprite, assets
referenciados e a consistência dos projetos. É o mesmo check executado no CI.

## Docker local

Requer a stack dos microservices no ar e a rede externa existente:

```bash
docker network ls | grep ehs_microservices
docker compose up -d --build
```

Acesso pelo nginx dos microservices: `http://localhost/app/portfolio/`.
O container não publica porta no host.

## Produção

O workflow `.github/workflows/build.yml` publica a imagem no GHCR a cada push
na `main` (tags `latest` e `:<sha>`). No servidor:

```bash
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Variáveis opcionais:

| Variável | Padrão | Descrição |
| --- | --- | --- |
| `PORTFOLIO_UI_IMAGE` | `ghcr.io/eduhsilva/portfolio-ui:latest` | imagem usada em produção |
| `IMAGE_TAG` | `latest` | tag da imagem |
| `EHS_MICROSERVICES_NETWORK` | `microservices_backend` | rede externa conectada |

### Rotas

| Rota | Comportamento |
| --- | --- |
| `/` | redireciona para `/app/portfolio/` |
| `/app` | redireciona para `/app/portfolio/` |
| `/app/portfolio` | redireciona para `/app/portfolio/` |
| `/app/portfolio/` | página principal |
| `/app/portfolio/assets/*` | cache imutável por 1 ano |

### Rollback

```bash
IMAGE_TAG=<sha-anterior> docker compose -f docker-compose.prod.yml up -d
```

## Conteúdo

- **Projetos**: edite `web/assets/js/data.js` (`title`/`description` em PT e EN, `tags`,
  `categories`, `link`, `icon`).
- **Textos da página**: edite `web/assets/js/i18n.js` (chaves usadas via `data-i18n`
  no HTML).
- **Estilos**: tokens de cor, tipografia e espaçamento em `web/assets/css/styles.css`.
