/** @type {import('next').NextConfig} */

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require("path");
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    output: "standalone",
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    reactStrictMode: false,
    // trailingSlash: true,
    rewrites: async () => {
        return [
            {
                source: "/api/auth/:path*",
                destination: `/api/auth/:path*`,
            }
        ];
    },
    compiler:{
        removeConsole:process.env.NODE_ENV === 'production'
    }
};

export default nextConfig;
