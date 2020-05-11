function startProcess(args: string[] = []): Deno.Process {
  return Deno.run({ cmd: ['deno', ...args] });
}

const throttle = 500;
let app: Deno.Process = startProcess(Deno.args);
let appInitTime: number = Date.now();
let timeout: number|null = null;

function runApp() {
  appInitTime = Date.now();
  app.close();
  app = startProcess(Deno.args);
}

for await (const event of Deno.watchFs('.')) {
  if (event.kind !== "access") {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(runApp, throttle);
  }
}
