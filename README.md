![CI](https://github.com/mxn2020/minions-audio-tests-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-audio-tests

**Voice interaction configs, TTS/STT pipeline settings, and audio samples**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-audio-tests/sdk minions-sdk

# Python
pip install minions-audio-tests

# CLI (global)
npm install -g @minions-audio-tests/cli
```

---

## CLI

```bash
# Show help
audio-tests --help
```

---

## Python SDK

```python
from minions_audio_tests import create_client

client = create_client()
```

---

## Project Structure

```
minions-audio-tests/
  packages/
    core/           # TypeScript core library (@minions-audio-tests/sdk on npm)
    python/         # Python SDK (minions-audio-tests on PyPI)
    cli/            # CLI tool (@minions-audio-tests/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [audio-tests.minions.help](https://audio-tests.minions.help)
- Blog: [audio-tests.minions.blog](https://audio-tests.minions.blog)
- App: [audio-tests.minions.wtf](https://audio-tests.minions.wtf)

---

## License

[MIT](LICENSE)
