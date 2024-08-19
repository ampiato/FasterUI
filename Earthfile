VERSION 0.8

ci:
    BUILD ./python+ci
    BUILD ./python+ci


deploy-docs:
    FROM ./docs+deps

    # BUILD ./component-library+storybook
    COPY ./component-library+storybook/storybook-static ./public/storybook

    RUN --secret NETLIFY_AUTH_TOKEN --secret NETLIFY_SITE_ID netlify build --context production
    RUN --push --secret NETLIFY_AUTH_TOKEN --secret NETLIFY_SITE_ID netlify deploy --prod
