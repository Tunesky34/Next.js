# Monitoring

This repository includes a local Prometheus + Grafana + Alertmanager stack for the Next.js app.

## What is included

- `app/api/metrics/route.ts` exposes Prometheus metrics at `/api/metrics`
- `app/api/health/route.ts` exposes a simple health endpoint at `/api/health`
- `monitoring/prometheus.yml` configures scraping for the app and Prometheus itself
- `monitoring/alert.rules.yml` defines sample alerts for app downtime, latency, and 5xx errors
- `monitoring/alertmanager.yml` configures Alertmanager with a default webhook receiver
- `monitoring/grafana/` contains provisioning for a Prometheus datasource and a dashboard

## Run locally

From the project root:

```bash
npm install
npm run build
docker compose up --build
```

Then open:

- App: http://localhost:3000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001
- Alertmanager: http://localhost:9093

## Grafana dashboard

Grafana will provision a dashboard named **Next.js App Metrics**.

## Alerting

Alertmanager is configured in `monitoring/alertmanager.yml`.
Update the `slack_configs`, `email_configs`, and `webhook_configs` sections with your own Slack webhook URL, SMTP/email settings, or custom webhook endpoint.
