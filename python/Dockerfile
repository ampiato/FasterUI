FROM python:3

WORKDIR /code
ADD dist/*.whl .
RUN pip install *.whl && rm *.whl
ENTRYPOINT ["python", "-m", "fasterui"]
CMD ["server"]
