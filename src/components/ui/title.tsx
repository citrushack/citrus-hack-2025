type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return <div className="text-5xl font-bold text-white">{children}</div>;
};

export default Title;
