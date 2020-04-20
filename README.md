# Rhinoder

This program reloads a deno program automatically when a file in the current working directory is created, deleted or modified.

## Usage

the following code runs `deno --allow-net example.ts` which is located in `/some/work/dir/example.ts` on start an whenever a file in the folder `/some/work/dir` changes.


```bash
/some/work/dir$ deno --allow-run --allow-read https://raw.githubusercontent.com/Caesar2011/rhinoder/master/mod.ts --allow-net example.ts
```