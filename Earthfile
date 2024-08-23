VERSION 0.8

ci:
    ARG version="0.1.0"

    BUILD ./python+ci --version $version
    BUILD ./component-library+ci --version $version
    BUILD ./docs+ci --version $version


artifacts:
    ARG version
    FROM busybox

    COPY --pass-args ./python+wheel/fasterui-$version-py3-none-any.whl .
    COPY --pass-args ./python+openapi/openapi.json .
    COPY --pass-args ./component-library+storybook/storybook-static ./storybook-static

    SAVE ARTIFACT fasterui-$version-py3-none-any.whl
    SAVE ARTIFACT openapi.json
    SAVE ARTIFACT storybook-static


deploy-python:
    ARG version
    FROM python:3

    COPY +artifacts/fasterui-$version-py3-none-any.whl ./
    COPY +artifacts/openapi.json ./
    
    RUN pip install twine
    RUN --secret TWINE_PASSWORD twine upload --non-interactive -u __token__ --repository pypi fasterui-$version-py3-none-any.whl

deploy-component-library:
    ARG version
    FROM ./component-library+build --version $version

    RUN --secret NPM_PUBLSH_KEY npm config set //registry.npmjs.org/:_authToken=$NPM_PUBLSH_KEY
    RUN npm publish


deploy:
    ARG version

    BUILD +deploy-docs --version $version
    BUILD +deploy-python --version $version
    BUILD +deploy-component-library --version $version
