import type { Params } from 'nestjs-pino';
import { randomUUID } from 'node:crypto';

export const loggerConfig: Params = {
  pinoHttp: {
    level: process.env.LOG_LEVEL ?? 'info',
    genReqId: (req) => {
      const incoming = req.headers['x-request-id'];
      return (Array.isArray(incoming) ? incoming[0] : incoming) || randomUUID();
    },
    customProps: (req) => ({ requestId: req.id, phone: (req as typeof req & { body?: { phone?: string } }).body?.phone }),
    redact: {
      paths: [
        'req.headers.authorization',
        "req.headers['x-api-key']",
        'req.body.phone',
        'phone',
        'req.body.teleBirrPhone',
        'req.body.customer.phone',
        '*.phone',
        '*.*.phone',
      ],
      censor: '[redacted]',
    },
    transport: process.env.NODE_ENV === 'development'
      ? { target: 'pino-pretty', options: { colorize: true, singleLine: true } }
      : undefined,
  },
};
