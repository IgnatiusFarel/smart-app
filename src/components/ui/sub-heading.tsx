interface SubHeadingProps {
    title: string;    
  }
  
  export const SubHeading: React.FC<SubHeadingProps> = ({ title }) => {
    return (
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>        
      </div>
    );
  };
  