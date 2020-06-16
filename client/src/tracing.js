'use strict';

const openTelemetry = require('@opentelemetry/api');
const { WebTracerProvider } = require('@opentelemetry/web');
const { HttpsPlugin } = require('@opentelemetry/plugin-https');

const { SimpleSpanProcessor } = require('@opentelemetry/tracing');

const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');


const EXPORTER = process.env.EXPORTER || '';


module.exports = (serviceName) => {
  const provider = new WebTracerProvider({
    plugins: [
      new HttpsPlugin(),
    ],
  });

  // const webTracer = new WebTracerProvider({
  //   plugins: [
  //     new DocumentLoad(),
  //   ],
  // });

  const projectId = process.env.GOOGLE_PROJECT_ID || "ardent-fusion-279020";
  const exporter = new TraceExporter({projectId: projectId});

  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  // Initialize the OpenTelemetry APIs to use the NodeTracerProvider bindings
  provider.register();

  return openTelemetry.trace.getTracer('basic');
};