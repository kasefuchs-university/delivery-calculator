FROM node:26-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g corepack
RUN corepack enable

COPY . /app
WORKDIR /app

FROM base AS build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM busybox:stable

COPY --from=build /app/dist /www/delivery-calculator/

EXPOSE 8080

ENTRYPOINT [ "/bin/httpd" ]
CMD [ "-f", "-p", "8080", "-h", "/www" ]
