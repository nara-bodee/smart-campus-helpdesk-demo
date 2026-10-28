import { existsSync, writeFileSync } from 'node:fs';
import { randomBytes } from 'node:crypto';
import { spawnSync } from 'node:child_process';
if (!existsSync('api/.env')) writeFileSync('api/.env', `JWT_SECRET=${randomBytes(48).toString('hex')}\nPORT=3000\n`, {mode:0o600});
const r=spawnSync('npm', ['run','init','-w','api'], {stdio:'inherit',shell:process.platform==='win32'}); process.exit(r.status ?? 1);
