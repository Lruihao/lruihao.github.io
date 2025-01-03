# ⚙️ Versioning, change-log and release.

# FixIt Releaser

Versioning, change-log and release for Hugo FixIt Similar commit style.

## Features

- Update FixIt internal version number. (**[FixIt](https://github.com/hugo-fixit/FixIt) Only**)
- Generate changelog. (General)

## Installation

```bash
npm install @hugo-fixit/fixit-releaser --save-dev
```

## Configuration

Add the following to `package.json` of FixIt project.

```json
{
  &#34;scripts&#34;: {
    &#34;version&#34;: &#34;fixit-releaser version --prod&#34;,
    &#34;release&#34;: &#34;fixit-releaser changelog&#34;
  }
}
```

## Usage

```bash
npx fixit-releaser version --prod
# Update the FixIt version from v0.3.12-1ca9fdb7 to v0.3.12.
npx fixit-releaser version --dev
# Update the FixIt version from v0.3.12-1ca9fdb7 to v0.3.12-2ca9fdb7.
npx fixit-releaser changelog --starting-version v0.3.10
# auto-changelog: 6 kB written to CHANGELOG.md
```


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/fixit-releaser/  

