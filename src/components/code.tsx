import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorDark as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { title } from '@/components/primitives';
import Markdown from 'react-markdown';

interface Props {
  filename: string;
  language: string;
  children: string | string[];
}

export const CodeSnippet: React.FC<React.PropsWithChildren<Props>> = ({ filename, language, children }) => {
  return (
    <div className='mt-6 p-2'>
      <Accordion isCompact variant='bordered'>
        <AccordionItem
          key="code"
          title={<span className={title({ color: 'yellow', size: 'sm' })}>{filename}</span>}
          className='p-2'
        >
          {
            language === 'text'
              ? <code>{children}</code>
              : (
                <SyntaxHighlighter language={language} style={codeStyle}>
                  {children}
                </SyntaxHighlighter>
              )
          }
        </AccordionItem>
      </Accordion>
    </div>
  )
}
