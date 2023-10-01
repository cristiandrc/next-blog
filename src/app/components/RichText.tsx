import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  content: string;
}

export default function RichText({ content }: RichTextProps) {
  return (
    <section>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </section>
  );
}
