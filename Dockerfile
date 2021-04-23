FROM debian:buster-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    xz-utils \
    nkf \
    curl \
    ca-certificates \
 && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
 && apt-get update \
 && apt-get install -y --no-install-recommends \
    nodejs \
 && apt-get -y clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
