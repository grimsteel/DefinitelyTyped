// Type definitions for zipkin-instrumentation-fetch 0.11
// Project: https://github.com/openzipkin/zipkin-js#readme
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import fetch from "node-fetch";
import { Tracer } from "zipkin";

interface Options {
    tracer: Tracer;
    remoteServiceName: string;
    serviceName?: string;
}

declare function wrapFetch(rawFetch: typeof fetch, options: Options): typeof fetch;

export = wrapFetch;
