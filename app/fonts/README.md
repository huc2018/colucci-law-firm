Local font files for `next/font/local`

Expected files in this folder:

- NotoSansSC-Regular.woff2 (weight 400)
- NotoSansSC-Medium.woff2 (weight 500)
- NotoSansSC-Bold.woff2 (weight 700)
- NotoSerifSC-Regular.woff2 (weight 400)
- NotoSerifSC-Medium.woff2 (weight 500)
- NotoSerifSC-SemiBold.woff2 (weight 600)
- NotoSerifSC-Bold.woff2 (weight 700)

Current status:

- The repo currently includes placeholder WOFF2 files copied from local Next cache for offline builds.
- Replace these files with your own proper Noto SC subsets to ensure full Chinese coverage.

Notes:

- Prefer WOFF2 format.
- To reduce bundle size, use subsetted Chinese fonts for your actual content coverage.
