# syntax=docker/dockerfile:1

# --------------------------------------------------
# RUNTIME - site estático (HTML, CSS e JS puros)
# --------------------------------------------------
FROM nginx:1.28-alpine AS runtime

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY web/ /usr/share/nginx/html/app/portfolio

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/app/portfolio/ || exit 1
