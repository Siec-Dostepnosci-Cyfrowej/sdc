import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

interface RootProps {
    children: React.ReactNode;
}

export default function Root({ children }: RootProps): JSX.Element {
    const location = useLocation();
    const { siteConfig } = useDocusaurusContext();
    const siteMeta = siteConfig.themeConfig?.metadata || [];

    // Defaults
    let title = siteConfig.title;
    let description = '';
    let keywords = '';

    // 🧩 Docs page
    try {
        const doc = useDoc();
        if (doc?.metadata) {
            title = doc.metadata.title || title;
            description = doc.metadata.description || '';
            keywords = (doc.metadata.keywords || []).join(', ');
        }
    } catch {
        // Not a doc page
    }

    // 🧩 Blog page
    try {
        const blog = useBlogPost();
        if (blog?.metadata) {
            title = blog.metadata.title || title;
            description = blog.metadata.description || '';
            keywords = (blog.metadata.keywords || []).join(', ');
        }
    } catch {
        // Not a blog page
    }

    // 🧩 Fallbacks
    if (!description) {
        const defDesc = siteMeta.find((m) => m.name === 'description');
        if (defDesc) description = defDesc.content;
    }

    if (!keywords) {
        const defKeywords = siteMeta.find((m) => m.name === 'keywords');
        if (defKeywords) keywords = defKeywords.content;
    }

    return (
        <>
            <Head>
                {title && <title>{`${title} | ${siteConfig.title}`}</title>}
                {description && <meta name="description" content={description} />}
                {keywords && <meta name="keywords" content={keywords} />}
            </Head>

            {children}
        </>
    );
}
