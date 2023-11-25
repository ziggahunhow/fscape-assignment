import LoadingButton from "@mui/lab/LoadingButton";

type ButtonProps = {
  text: string;
  bgColor: string;
  color?: string;
  loading?: boolean;
  onClick?: () => void;
};

export const Button = ({
  text,
  bgColor,
  color,
  loading,
  onClick,
}: ButtonProps) => {
  return (
    <LoadingButton
      loading={loading}
      onClick={onClick}
      sx={{
        backgroundColor: bgColor,
        color,
        mx: "4px",
        fontWeight: 100,
        fontSize: "12px",
        textTransform: "none",
      }}
    >
      {text}
    </LoadingButton>
  );
};
