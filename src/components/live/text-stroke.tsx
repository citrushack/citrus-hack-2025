type props = {
  title: string;
  color: string;
  subColor: string;
};

const TextStroke = ({ title, color, subColor }: props) => {
  return (
    <div className="relative">
      <div className={`${color}`}>{title}</div>
      <div className={`absolute inset-0 ${subColor}`}>{title}</div>
    </div>
  );
};

export default TextStroke;
