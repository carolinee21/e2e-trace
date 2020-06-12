const traceProvider = require('@opencensus/nodejs');
const { StackdriverTraceExporter } = require('@opencensus/exporter-stackdriver');
const exporter = new StackdriverTraceExporter({projectId: "ardent-fusion-279020"});
const propagation = require('@opencensus/propagation-b3');

export default function initTracer () {

  // maybe remove exporter??
    traceProvider.registerExporter(exporter).start({
        exporter,
        samplingRate: 1, // Always sample (for testing purposes)
        propagation: new propagation.B3Format(),
        logLevel: 1 // show errors
      });
    
    const tracer = traceProvider.tracer;
    return tracer;
}