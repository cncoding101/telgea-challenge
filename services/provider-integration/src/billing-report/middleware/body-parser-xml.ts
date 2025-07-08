import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import bodyParserXml from 'body-parser-xml';

bodyParserXml(bodyParser);

@Injectable()
export class XmlBodyParserMiddleware implements NestMiddleware {
  private xmlParser = bodyParser.xml({
    limit: '1mb',
    xmlParseOptions: {
      explicitArray: false,
      trim: true,
    },
  });

  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['content-type']?.includes('xml')) {
      this.xmlParser(req, res, next);
    } else {
      next();
    }
  }
}
