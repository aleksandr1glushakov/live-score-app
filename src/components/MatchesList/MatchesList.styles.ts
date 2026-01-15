import styled from "styled-components";
import { theme } from "@/shared/theme";

export const MatchesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: ${theme.borderRadius.md};
    padding-right: ${theme.spacing.sm}; /* Space for scrollbar */
    
    /* Custom scrollbar styling */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.background.primary};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.border.dark};
      border-radius: 4px;

      &:hover {
        background: ${theme.colors.text.muted};
      }
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.lg};
  padding: ${theme.spacing.xxl};
  background: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.md};
`;
