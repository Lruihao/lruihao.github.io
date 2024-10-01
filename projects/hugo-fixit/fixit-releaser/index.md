# ⚙️ Versioning, Change-Log and Release.

# FixIt Releaser

Automatically update FixIt internal version number and generate changelog.

## Installation

```bash
npm install fixit-releaser --save-dev
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

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/hugo-fixit/fixit-releaser/  

