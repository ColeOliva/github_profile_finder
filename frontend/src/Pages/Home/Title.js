import Color from "../../constant/Color";

const Title = ({ information }) => {
  return (
    <div
      style={{
        marginLeft: "1rem",
      }}
    >
      <div
        style={{
          fontSize: Color.headerFontSize,
          fontWeight: Color.fontWeight,
        }}
      >
        {information.name}
      </div>
      <div>
        <a
          href={`https://github.com/${information.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{information.login}
        </a>
      </div>
    </div>
  );
};

export default Title;
