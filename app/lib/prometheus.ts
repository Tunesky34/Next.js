import { Counter, collectDefaultMetrics, Histogram, Registry } from 'prom-client'

declare global {
  var promRegistry: Registry | undefined
  var promHttpRequestCounter: Counter<string> | undefined
  var promHttpRequestDuration: Histogram<string> | undefined
}

const register = globalThis.promRegistry ?? new Registry()

function createMetrics() {
  collectDefaultMetrics({ register, prefix: 'nextjs_' })

  const httpRequestCounter = new Counter({
    name: 'nextjs_http_requests_total',
    help: 'Total HTTP requests handled by the Next.js app',
    labelNames: ['method', 'route', 'status'],
  })

  const httpRequestDuration = new Histogram({
    name: 'nextjs_http_request_duration_ms',
    help: 'HTTP request duration in milliseconds',
    labelNames: ['method', 'route', 'status'],
    buckets: [50, 100, 200, 300, 500, 1000, 2000, 5000],
  })

  register.registerMetric(httpRequestCounter)
  register.registerMetric(httpRequestDuration)

  globalThis.promRegistry = register
  globalThis.promHttpRequestCounter = httpRequestCounter
  globalThis.promHttpRequestDuration = httpRequestDuration
}

if (!globalThis.promRegistry) {
  createMetrics()
}

export function getMetricsRegistry() {
  return globalThis.promRegistry as Registry
}
