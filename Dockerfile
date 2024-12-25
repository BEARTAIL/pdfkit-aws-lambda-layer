FROM amazon/aws-lambda-nodejs:22

ENV ROOT_DIR /usr/local/pdfkit

RUN mkdir -p $ROOT_DIR

ADD package.json $ROOT_DIR
ADD package-lock.json $ROOT_DIR

WORKDIR $ROOT_DIR

RUN npm install -g npm@v7 && \
  npm install --no-bin-links --production

CMD ["node",  "--version"]
