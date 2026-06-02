This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Monitoring with Prometheus and Grafana

This project now exposes Prometheus metrics at `/api/metrics` and a health check at `/api/health`.

A local monitoring stack is available under `monitoring/` and can be started from the project root with:

```bash
npm install
npm run monitor
```

Then open:

- App: http://localhost:3000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001
- Alertmanager: http://localhost:9093

Update `monitoring/alertmanager.yml` to point alerts at your preferred receiver (Slack, email, webhook, etc.).

## Code Quality & Security

See `docs/sonarqube-snyk.md` for full SonarQube and Snyk setup, configuration, and usage.

### SonarQube Analysis

Run code analysis locally:

```bash
npm run sonar
```

Requires SonarQube server running. Set `SONAR_HOST_URL` and `SONAR_TOKEN` environment variables.

### Snyk Security Scanning

Test for vulnerabilities:

```bash
npm run snyk:test
```

Monitor project:

```bash
npm run snyk:monitor
```

Requires `SNYK_TOKEN` environment variable. Get your token at https://snyk.io

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
