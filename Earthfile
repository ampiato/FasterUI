VERSION 0.8

ci:
    BUILD ./python+ci
    BUILD ./python+ci


deploy-docs:
    FROM ./docs+deps

    COPY ./component-library+storybook/storybook-static ./public/storybook
    COPY ./python+openapi/openapi.json ./public/openapi.json

    RUN --secret NETLIFY_AUTH_TOKEN --secret NETLIFY_SITE_ID netlify build --context production
    RUN --push --secret NETLIFY_AUTH_TOKEN --secret NETLIFY_SITE_ID netlify deploy --prod

deploy:
    ARG version

    BUILD ./python+deploy --version $version
    BUILD ./component-library+deploy --version $version
