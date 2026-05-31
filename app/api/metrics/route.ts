import { NextResponse } from 'next/server'
import { getMetricsRegistry } from '../../lib/prometheus'

export async function GET() {
  const registry = getMetricsRegistry()
  const metrics = await registry.metrics()

  return new NextResponse(metrics, {
    status: 200,
    headers: {
      'Content-Type': registry.contentType,
    },
  })
}
