const { NodeTracerProvider } = require("@opentelemetry/node");
const { SimpleSpanProcessor } = require("@opentelemetry/tracing");
const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

export default function initTracer () {

  const projectId = process.env.GOOGLE_PROJECT_ID || "ardent-fusion-279020";
  const tracerProvider = new NodeTracerProvider();
  const exporter = new TraceExporter({projectId: projectId});
  
  tracerProvider.addSpanProcessor(new SimpleSpanProcessor(exporter));
  tracerProvider.register();
  const tracer = tracerProvider.getTracer('basic');
  return tracer;
}