'use strict';

const opentelemetry = require('@opentelemetry/api');
const { NodeTracerProvider } = require('@opentelemetry/node');
const { SimpleSpanProcessor } = require('@opentelemetry/tracing');

const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

module.exports = (serviceName) => {
  const provider = new NodeTracerProvider({
    plugins: {
      express: {
        enabled: true,
        path: '@opentelemetry/plugin-express',
      },
      https: {
        enabled: true,
        path: '@opentelemetry/plugin-https',
      },
    },
  });

  const projectId = process.env.GOOGLE_PROJECT_ID || "ardent-fusion-279020";
  const exporter = new TraceExporter({projectId: projectId});

  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  // Initialize the OpenTelemetry APIs to use the NodeTracerProvider bindings
  provider.register();

  return opentelemetry.trace.getTracer('basic');
};