declare var app: {
  environment: string;
};

interface WebpackRequire {
  (id: string): any;
  context(dir: string, useSubdirs: boolean, pattern: RegExp): any;
}

declare var require: WebpackRequire;
