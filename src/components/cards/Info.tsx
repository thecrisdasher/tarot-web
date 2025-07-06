import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div className="p-6 lg:p-8 rounded-3xl mystic-card border border-purple-200/50 bg-gradient-to-br from-white/90 to-purple-50/60 hover:shadow-lg transition-all duration-300 group">
      <div className="rounded-xl bg-gradient-to-br from-purple-100 to-purple-200/50 p-4 w-max relative group-hover:scale-105 transition-transform duration-300">
        {children}
      </div>
      <h2 className="text-purple-900 font-bold text-lg md:text-xl mt-4 mb-2 group-hover:text-purple-700 transition-colors duration-300">
        {title}
      </h2>
      <Paragraph className="text-purple-800/80 text-sm leading-relaxed">{description}</Paragraph>
    </div>
  );
};
