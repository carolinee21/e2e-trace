const { NodeTracerProvider } = require("@opentelemetry/node");
const { SimpleSpanProcessor } = require("@opentelemetry/tracing");
const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

// const exporter = new StackdriverTraceExporter({projectId: "ardent-fusion-279020"});

export default function initTracer () {

  const tracerProvider = new NodeTracerProvider();

    // traceProvider.registerExporter(exporter).start({
    //     exporter,
    //     samplingRate: 1, // Always sample (for testing purposes)
    //     propagation: new propagation.B3Format(),
    //     logLevel: 1 // show errors
    //   });

    tracerProvider.addSpanProcessor(
      new SimpleSpanProcessor(
        new TraceExporter({
          // If you are not in a GCP environment, you will need to provide your
          // service account key here. See the Authentication section in the docs.
        })
      )
    );

    tracerProvider.register();

    const tracer = traceProvider.tracer;
    return tracer;
}