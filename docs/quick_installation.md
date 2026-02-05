# Quick installation

## Get application

```bash
git clone https://github.com/oktatapi/vitam_sipere.git vitam
cd vitam
npm install
```

## Generate conf and key

```bash
node op conf:generate
node op key:generate
```

## Migartion and seeding

```bash
node op migrate
node op db:seed
```
