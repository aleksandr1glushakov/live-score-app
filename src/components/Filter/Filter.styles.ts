import styled from "styled-components";
import { theme } from "@/shared/theme";

export const FilterContainer = styled.div`
  background: ${theme.colors.background.white};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  font-family: ${theme.typography.fontFamily};
`;

export const FilterTitle = styled.h2`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
`;

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const FilterItem = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${(props) =>
    props.$active ? theme.colors.background.light : theme.colors.background.white};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.secondary};
  text-align: left;
  transition: background-color 0.2s;
  font-family: ${theme.typography.fontFamily};

  &:hover {
    background: ${theme.colors.background.light};
  }
`;

export const FilterCount = styled.span`
  background: ${theme.colors.text.secondary};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  min-width: 32px;
  text-align: center;
`;
