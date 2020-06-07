# Rhinoder

This program reloads a deno program automatically when a file in the current working directory is created, deleted or modified.

## Usage

the following code runs `deno --allow-net example.ts` which is located in `/some/work/dir/example.ts` on start and whenever a file in the folder `/some/work/dir` changes.


```bash
/some/work/dir$ deno --allow-run --allow-read https://deno.land/x/rhinoder@v1.2.0/mod.ts --allow-net example.ts
```

## Thanks to

Thanks to [samuelgozi](https://github.com/samuelgozi) who posted the base for this code in [this GitHub issue](https://github.com/denoland/deno/issues/4830).
