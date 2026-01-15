import styled from "styled-components";
import { theme } from "@/shared/theme";

export const Container = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background.primary};
  padding: ${theme.spacing.lg};
  font-family: ${theme.typography.fontFamily};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.h1`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize.lg};
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${theme.spacing.lg};
  align-items: start;

  /* On desktop: fixed height container with scrollable matches */
  @media (min-width: ${theme.breakpoints.tablet}) {
    height: calc(100vh - ${theme.spacing.xl} - ${theme.spacing.xl} - 60px); /* Subtract header and padding */
    max-height: calc(100vh - 120px); /* Account for header and padding */
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
