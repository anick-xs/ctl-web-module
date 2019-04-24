FROM registry.dev.chelizitech.com/public/caddy:0.11.1-7

WORKDIR /root

COPY Caddyfile /root/

COPY dist /root/web/ui/module

CMD ["./startup.sh","web-module","/ui/module"]
