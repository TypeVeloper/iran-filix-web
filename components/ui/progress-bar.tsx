import cn from "classnames";interface Props {
  level: number;
  className?: string;
}

const ProgressBar: React.FC<Props> = ({ className, level = 0 }) => {
  const rootClassName = cn(
    className,
    `w-full bg-heading/20 ${level ? "h-2" : " h-0"}  `,
  );

  return (
    <div className={rootClassName}>
      {level && (
        <div
          className={` bg-heading h-full transition-all duration-1000 `}
          style={{ width: `${level}%` }}></div>
      )}
    </div>
  );
};

export default ProgressBar;
