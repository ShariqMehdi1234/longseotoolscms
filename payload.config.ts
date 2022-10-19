import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import ToolsTypes from './collections/ToolsTypes';
import SEOTools from './collections/SEOTools';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    ToolsTypes,
    SEOTools,
  ],
});
