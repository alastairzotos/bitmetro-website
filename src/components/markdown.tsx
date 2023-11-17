import { title } from '@/components/primitives';
import stripIndent from 'strip-indent';
import ReactMarkdown from 'react-markdown';
import { Snippet } from '@nextui-org/react';
import { CodeSnippet } from '@/components/code';

interface Props {
  children: string;
}

const languageCodeToName: Record<string, string> = {
  ts: 'typescript',
  yaml: 'yaml',
}

export const Markdown: React.FC<Props> = ({ children }) => (
  <ReactMarkdown
    components={{
      'h1': ({ children }) => <h1 className={title({ color: "cyan", size: "xs" })}>{children}</h1>,
      'h2': ({ children }) => <h2 className={title({ color: "cyan", size: "xs" })}>{children}</h2>,
      'h3': ({ children }) => <h3 className={title({ color: "cyan", size: "xs" })}>{children}</h3>,
      'h4': ({ children }) => <h4 className={title({ color: "cyan", size: "xs" })}>{children}</h4>,
      'h5': ({ children }) => <h5 className={title({ color: "cyan", size: "xs" })}>{children}</h5>,
      'h6': ({ children }) => <h6 className={title({ color: "cyan", size: "xs" })}>{children}</h6>,
      'a': ({ children, href }) => <a href={href} className="underline text-violet-500 no-underline" target="_blank">{children}</a>,
      'p': ({ children }) => <p className='pt-4 leading-7'>{children}</p>,
      code: ({ className, children }) => {
        const languageCode = className?.split('-').pop()!;
        const content = children as string;
        const [filename, ...code] =
          content.startsWith("__title__:")
          ? content.split('\n')
          : [null];

        return (
          <CodeSnippet
            filename={filename ? filename.split('__title__:').pop()! : 'View code snippet'}
            language={languageCodeToName[languageCode]}
          >
            {code.length ? code.join('\n') : content}
          </CodeSnippet>
        )
      }
    }}
  >
    {stripIndent(children)}
  </ReactMarkdown>
)