#!/bin/bash

ENVIRONMENT=$1
npx sequelize-cli db:migrate --env $ENVIRONMENT
npx sequelize-cli seed:generate --name seed-banner --env $ENVIRONMENT
npx sequelize-cli db:seed:all --env $ENVIRONMENT
npm start