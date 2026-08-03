# SCORES third-party notices

Last updated: August 3, 2026

This file identifies third-party software, fonts, and icons intentionally included in the SCORES source or production bundle. Exact JavaScript package versions are locked in `package-lock.json`; the font hashes below identify the reviewed runtime files. The production build ships this notice and the complete `LICENSES/` directory in the Pages artifact and offline precache.

These notices do not grant permission to reuse SCORES project-authored code, event-score text, research, paper artwork, generated material assets, screenshots, or branding. Unless a separate project `LICENSE` file says otherwise, those materials have no general reuse license from this repository.

## Runtime software

| Component | Version | License copy | Source |
| --- | --- | --- | --- |
| React | 19.2.0 | [MIT with Meta copyright](LICENSES/React-MIT.txt) | [facebook/react](https://github.com/facebook/react) |
| React DOM | 19.2.0 | [MIT with Meta copyright](LICENSES/React-MIT.txt) | [facebook/react](https://github.com/facebook/react) |
| Scheduler | 0.27.0 | [MIT with Meta copyright](LICENSES/React-MIT.txt) | [facebook/react](https://github.com/facebook/react/tree/main/packages/scheduler) |
| Lucide React | 0.468.0 | [ISC with Feather/Lucide copyrights](LICENSES/Lucide-ISC.txt) | [lucide-icons/lucide](https://github.com/lucide-icons/lucide) |

The tracked React, React DOM, and Scheduler license text is byte-identical to the installed React package copy; those three installed packages carry the same Meta MIT notice. The Lucide copy is byte-identical to its installed package license.

## Build tooling

| Component | Version | License | Source |
| --- | --- | --- | --- |
| Vite | 8.2.0 | [MIT and bundled-dependency notices](LICENSES/Vite-LICENSE.md) | [vitejs/vite](https://github.com/vitejs/vite) |
| `@vitejs/plugin-react` | 6.0.5 | MIT | [vitejs/vite-plugin-react](https://github.com/vitejs/vite-plugin-react) |

Build tools are development dependencies and are not served as separate packages. Vite's complete installed license/notice file is retained because Vite generates the distributed bundle and runtime helper. The React plugin is used only during the build; its authoritative license remains in the installed package and linked upstream source.

## Fonts and symbols

### Courier Prime

- Runtime files: `courier-prime-400.ttf`, `courier-prime-700.ttf`
- License: [SIL Open Font License 1.1 with the Courier Prime copyright](LICENSES/OFL-1.1.txt)
- Authoritative source: [Google Fonts Courier Prime family](https://github.com/google/fonts/tree/main/ofl/courierprime)
- SHA-256:
  - regular: `b03b41606b4469bd908aaa83146ba19d34cbeab1ce11fac0074d0d8fe9eba6cc`
  - bold: `79d4be90ecb99d03ca5474a4e688e2fb45abcd4a9c348164c3aa9166c67cd53b`

The tracked OFL text is the authoritative upstream family license, with a terminating newline added for a conventional tracked text file. Redistribution and modification must comply with its copyright and reserved-font-name terms.

### Special Elite

- Runtime file: `special-elite-400.ttf`
- License: [Apache License 2.0](LICENSES/Apache-2.0.txt)
- Copyright/source metadata: [tracked upstream METADATA.pb](LICENSES/Special-Elite-METADATA.pb)
- Authoritative source: [Google Fonts Special Elite family](https://github.com/google/fonts/tree/main/apache/specialelite)
- SHA-256: `9f59e3a0e1c0008f2ef97b1c94e5d96c43748bbc92993570d1133454a484254c`

### Material Symbols Outlined

- Runtime file: `material-symbols-outlined.woff2`
- License: [Apache License 2.0](LICENSES/Apache-2.0.txt)
- Authoritative source: [Google Material Symbols](https://developers.google.com/fonts/docs/material_symbols)
- SHA-256: `ed43ff0d942a7e657ff8c0f6b8dacc598086556a6b73276c5b1354dfde3ead30`

The tracked Apache text is byte-identical to the Special Elite upstream license and the canonical [Apache 2.0 text](https://www.apache.org/licenses/LICENSE-2.0). The reviewed official Material Symbols repository did not supply a separate `NOTICE` file; this document retains the Google attribution and source link. Redistribution must retain all applicable copyright, patent, attribution, and notice terms.

## Review boundary

This inventory covers the runtime dependency and asset set present on August 3, 2026. Before adding or replacing a package, font, icon, image, audio file, or generated material, update this file and retain the source license or rights record needed for public distribution.
