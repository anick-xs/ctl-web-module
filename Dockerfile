FROM registry.dev.chelizitech.com/public/caddy:0.11.1-7

WORKDIR /root
COPY startup.sh /root/
COPY Caddyfile /root/

COPY dist /root/web/ui/module
COPY docs/.vuepress/dist /root/web/ui/docs

RUN chmod +x /root/startup.sh
CMD ["./startup.sh"]
