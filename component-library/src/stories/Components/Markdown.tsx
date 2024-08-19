import { Marked, Renderer } from '@ts-stack/markdown';
import { Markdown as Model } from '@/gen';

Marked.setOptions({
  renderer: new Renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});



export const Markdown: React.FC<Model> = ({ markdown }) => {
  let html = Marked.parse(markdown || "")
  return (
    <p className='text-gray-700 text-sm' dangerouslySetInnerHTML={{ __html: html }} />
  )
}