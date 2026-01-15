import styled from "styled-components";
import { theme } from "@/shared/theme";

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${theme.colors.background.secondary};
  border: 2px solid ${theme.colors.border.dark};
  color: ${theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  font-family: ${theme.typography.fontFamily};

  &:hover {
    background: ${theme.colors.status.finished};
    border-color: ${theme.colors.status.finished};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  /* Only show on mobile/tablet */
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
