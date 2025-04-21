#FROM ruby:3.2-alpine
FROM asciidoctor/docker-asciidoctor

RUN apk add --no-cache \
    build-base \
    ttf-freefont \
    graphicsmagick-dev ruby-dev musl-dev gcc \
    && gem install asciidoctor-lists \
    && gem install prawn-gmagick

WORKDIR /documents
ENTRYPOINT ["asciidoctor-pdf"]