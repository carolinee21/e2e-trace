

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production
# RUN npm install --save @opentelemetry/api
# RUN npm install --save @opentelemetry/node
# RUN npm install --save @opentelemetry/tracing
# RUN npm install --save @google-cloud/opentelemetry-cloud-trace-exporter

# Copy code from local directory
COPY . ./

# Run the app on container startup.
CMD [ "npm", "start" ]