import styled from "@emotion/styled";
import { NotificationType } from "../../utils/types/enums/notificationType";
import { theme } from "../../utils/styles/theme";
import { Paragraph } from "../../utils/styles/typography";
import { Breakpoint } from "../../utils/types/enums/breakpoint";
import { Button } from "../../utils/styles/general";

interface NotificationProps {
  message: string;
  type?: NotificationType;
  actionLabel?: string;
  action?: () => void;
}

export const Note = styled.div<{ type?: NotificationType }>(({ type }) => ({
  display: "block",
  padding: "1rem 1.5rem",
  borderRadius: theme.corners.large,
  backgroundColor:
    type === NotificationType.DEFAULT
      ? theme.palette.darkGray
      : theme.palette.danger,
  border: `1px solid ${
    type === NotificationType.DEFAULT
      ? theme.palette.gray
      : theme.palette.lightDanger
  }`,

  width: "100%",
  boxSizing: "border-box",
  margin: "1rem 0",
  [`@media (min-width: ${Breakpoint.MOBILE})`]: {
    display: "flex",
  },
}));

const Text = styled(Paragraph)({
  width: "100%",
  color: theme.palette.white,
});

const ButtonContainer = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const NoteButton = styled(Button)({
  width: "100%",
  [`@media (min-width: ${Breakpoint.MOBILE})`]: {
    width: "auto",
  },
});

export const Notification = ({
  message,
  type = NotificationType.DEFAULT,
  actionLabel,
  action,
}: NotificationProps) => {
  const getIconOf = (type: NotificationType) => {
    if (type === NotificationType.DANGER) return "⚠️";
    return "ℹ️";
  };

  return (
    <Note type={type}>
      <Text>
        {getIconOf(type)} {message}
      </Text>
      {action && actionLabel && (
        <ButtonContainer onClick={action}>
          <NoteButton>{actionLabel}</NoteButton>
        </ButtonContainer>
      )}
    </Note>
  );
};
