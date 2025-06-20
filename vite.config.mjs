import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html';
import fg from 'fast-glob'
import path from 'path'
import * as fs from 'fs'

// 多页面输入
const htmlFiles = fg.sync(['./*.html'], { onlyFiles: true })

// 为每个页面配置不同的 title
const titles = {
    index: '中海万泰',
    about: '关于我们 - 中海万泰',
    contact: '联系我们 - 中海万泰'
}
// 头部母版
const headerTpl = fs.readFileSync(
    path.resolve(__dirname, 'src/templates/header.html'),
    'utf-8'
)
// 底部母版
const footerTpl = fs.readFileSync(
    path.resolve(__dirname, 'src/templates/footer.html'),
    'utf-8'
)
// 母版配置
const getInjectData = (name) => ({
    title: titles[name] || '中海万泰',
    keywords: '中海万泰, 中海万泰, 中海, 万泰, 中海万泰官网',
    description: '中海万泰描述',
    header: headerTpl,
    footer: footerTpl,
})

export default defineConfig({
    base: './',
    plugins: [
        createHtmlPlugin({
            minify: false,
            pages: htmlFiles.map(file => {
                const name = path.basename(file, '.html')
                return {
                    filename: `${name}.html`,
                    template: file,
                    injectOptions: {
                        data: getInjectData(name),
                    },
                }
            }),
        })
    ],
    css: {
        devSourcemap: true,
    },
    server: {
        watch: {
            usePolling: true,
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: '', // 设置为空，资源不要放 assets 文件夹
        assetsInlineLimit: 0, // 确保所有资源（包括 SVG）都不再内联 base64
        minify: 'terser',
        terserOptions: {
            // 输出:format 压缩:compress 混淆:mangle
            compress: { drop_console: true, drop_debugger: true },
            format: { comments: false },
            mangle: { toplevel: false },
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const names = (assetInfo.names?.[0] || '');
                    const ext = names.split('.').pop();
                    if (ext === 'css') {
                        return `css/[name][extname]`;
                    }
                    if (['woff', 'woff2', 'ttf', 'otf', 'eot'].includes(ext)) {
                        return `fonts/[name][extname]`;
                    }
                    if (['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bmp', 'ico'].includes(ext)) {
                        return `images/[name]-[hash][extname]`;
                    }
                    if (ext === 'svg') {
                        return `svg/[name]-[hash][extname]`;
                    }
                    if (['mp4', 'webm', 'ogg', 'mov', 'avi', 'mkv'].includes(ext)) {
                        return `video/[name]-[hash][extname]`;
                    }
                    return `other/[name]-[hash][extname]`;
                },
                chunkFileNames: `js/[name].js`,
                entryFileNames: `js/[name].js`,
            },
        },
    },
});