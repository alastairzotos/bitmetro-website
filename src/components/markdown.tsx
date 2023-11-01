import { title } from '@/components/primitives';
import stripIndent from 'strip-indent';
import ReactMarkdown from 'react-markdown';

interface Props {
  children: string;
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
      'a': ({ children, href }) => <a href={href} className="underline text-violet-500 ">{children}</a>,
    }}
  >
    {stripIndent(children)}
  </ReactMarkdown>
)