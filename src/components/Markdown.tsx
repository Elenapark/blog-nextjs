'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// highlighting related packages
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import { FC } from 'react';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('css', css);

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

type Props = {
  markdown: string & { content?: string };
  [x: string]: any;
};

const Markdown: FC<Props> = ({ markdown, ...props }) => {
  const MarkdownComponents = {
    code: ({ node, inline, children, className, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={(match && match[1]) || ''}
          {...props}
        >
          {children}
        </SyntaxHighlighter>
      ) : (
        <code
          className="bg-red-100 text font-mono text-red-800 px-1 rounded-md"
          {...props}
        >
          {children}
        </code>
      );
    },
  };
  return (
    <ReactMarkdown
      components={MarkdownComponents}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      {...props}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
