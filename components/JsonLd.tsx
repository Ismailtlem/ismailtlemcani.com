import React from 'react';

interface JsonLdProps {
    data: Record<string, any>;
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

export default JsonLd;

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export const BreadcrumbJsonLd: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: item.url,
        })),
    };
    return <JsonLd data={data} />;
}; 