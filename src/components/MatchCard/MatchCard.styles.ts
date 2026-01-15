import styled from "styled-components";
import { theme } from "@/shared/theme";

export const Card = styled.div`
  background: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fontFamily};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
  }
`;

export const Country = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.muted};
  text-align: center;
  margin-bottom: ${theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.tight};
`;

export const Competition = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

export const StatusBadge = styled.div<{ $status: string }>`
  font-size: ${theme.typography.fontSize.sm};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  color: ${(props) => {
    if (props.$status === "LIVE") return theme.colors.status.live;
    if (props.$status === "CANCELLED") return theme.colors.status.cancelled;
    if (props.$status === "ENDED" || props.$status === "FT" || props.$status === "HT")
      return theme.colors.status.finished;
    return theme.colors.status.default;
  }};
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.lg} 0;
`;

export const Score = styled.div`
  font-size: ${theme.typography.fontSize["3xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  letter-spacing: ${theme.typography.letterSpacing.normal};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize["2xl"]};
  }
`;

export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing.md};
`;

export const TeamName = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  flex: 1;
`;

export const TeamHome = styled(TeamName)`
  text-align: left;
`;

export const TeamAway = styled(TeamName)`
  text-align: right;
`;

export const TimeCircle = styled.div<{ $progress?: number; $isHalf?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.border.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  background: ${(props) => {
    if (props.$isHalf) {
      return `conic-gradient(${theme.colors.progress.fill} 0deg 180deg, transparent 180deg 360deg)`;
    }
    if (props.$progress !== undefined) {
      return `conic-gradient(${theme.colors.progress.fill} 0deg ${props.$progress * 3.6}deg, transparent ${props.$progress * 3.6}deg 360deg)`;
    }
    return "transparent";
  }};

  &::before {
    content: "";
    position: absolute;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: ${theme.colors.background.secondary};
  }
`;

export const TimeText = styled.div`
  position: relative;
  z-index: 1;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.muted};
  font-weight: ${theme.typography.fontWeight.medium};
`;

export const DateTime = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.muted};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.tight};
`;
