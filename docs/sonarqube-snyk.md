# SonarQube and Snyk Documentation

This project includes support for SonarQube static analysis and Snyk security scanning.

## SonarQube

### What it does
SonarQube inspects source code for bugs, vulnerabilities, code smells, and quality issues.

### Project configuration
The project uses `sonar-project.properties` at the repository root.

Key settings:
- `sonar.projectKey=Tunesky_my-app`
- `sonar.organization=tunesky`
- `sonar.sources=.`
- `sonar.exclusions=node_modules/**,.next/**`
- `sonar.javascript.lcov.reportPaths=coverage/lcov.info`

### Run analysis
From the project root:

```bash
npm run sonar
```

### Requirements
- A local or remote SonarQube server
- `SONAR_HOST_URL` environment variable set to the SonarQube server URL
- `SONAR_TOKEN` environment variable set to a valid SonarQube token
- `sonar-scanner` installed and available on the PATH

Example:

```bash
export SONAR_HOST_URL="https://sonarqube.example.com"
export SONAR_TOKEN="your-sonar-token"
npm run sonar
```

## Snyk

### What it does
Snyk scans dependencies and the project for security vulnerabilities.

### Run security scan
Test for vulnerabilities locally:

```bash
npm run snyk:test
```

Send a snapshot to Snyk for monitoring and alerts:

```bash
npm run snyk:monitor
```

### Requirements
- `SNYK_TOKEN` environment variable set to your Snyk API token
- `snyk` CLI installed and available on the PATH

Example:

```bash
export SNYK_TOKEN="your-snyk-token"
npm run snyk:test
```

## Notes

- A `.snyk` policy file is included in the repository to support Snyk scans.
- Keep your SonarQube and Snyk tokens secure and avoid committing them to source control.
