import React, { useState, useEffect } from 'react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getLegalPageBySlug } from '../services/contentful';
import { LegalPageContent } from '../content/types';

interface LegalContentProps {
  slug: string;
}

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} className="text-primary-500 hover:underline">{children}</a>,
  },
};

const LegalContent: React.FC<LegalContentProps> = ({ slug }) => {
  const [page, setPage] = useState<LegalPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLegalPageBySlug(slug)
      .then((data: any) => {
        setPage(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-10 bg-gray-300 rounded w-1/3 mb-8"></div>
        <div className="space-y-4">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 mt-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="text-center bg-yellow-100 border border-yellow-400 text-yellow-700 p-4" role="alert">
        <p className="font-bold">Inhalt konnte nicht geladen werden.</p>
        <p>Stellen Sie sicher, dass ein Eintrag vom Typ "Legal Page" mit dem Slug "{slug}" in Contentful existiert und veröffentlicht ist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{page.title}</h1>
      <div className="prose prose-lg text-gray-700 max-w-none">
        {documentToReactComponents(page.content, richTextOptions)}
      </div>
    </div>
  );
};

export default LegalContent;
