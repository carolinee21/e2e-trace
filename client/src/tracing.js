'use strict';

const openTelemetry = require('@opentelemetry/api');
const { WebTracerProvider } = require('@opentelemetry/web');
const { HttpsPlugin } = require('@opentelemetry/plugin-https');
// const { NodeTracerProvider } = require('@opentelemetry/node');

const { SimpleSpanProcessor, BasicTracerProvider } = require('@opentelemetry/tracing');
// const { BasicTracerProvider } = require('@opentelemetry/tracing');

const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');



module.exports = (serviceName) => {
  // const provider = new WebTracerProvider({
  //   plugins: [
  //     new HttpsPlugin(),
  //   ],
  // });

  // const webTracer = new WebTracerProvider({
  //   plugins: [
  //     new DocumentLoad(),
  //   ],
  // });

  const tracerProvider = new BasicTracerProvider({
    plugins: {
        https: {
        enabled: true,
        path: "@opentelemetry/plugin-https"
        }
    }
    });

  const projectId = process.env.GOOGLE_PROJECT_ID || "ardent-fusion-279020";
  const exporter = new TraceExporter({projectId: projectId});

  tracerProvider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  // Initialize the OpenTelemetry APIs to use the NodeTracerProvider bindings
  tracerProvider.register();

  return openTelemetry.trace.getTracer();
};