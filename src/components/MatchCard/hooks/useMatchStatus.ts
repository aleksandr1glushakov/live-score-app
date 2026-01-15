import { useMemo } from "react";
import { Match } from "@/types/match";
import { getStatusDisplay, parseMinute } from "../utils";

interface UseMatchStatusReturn {
  statusDisplay: string;
  isLive: boolean;
  isFinished: boolean;
  isNotStarted: boolean;
  isCancelled: boolean;
  isHalfTime: boolean;
  minute: number | null;
  progress: number | null;
}

/**
 * Custom hook to compute match status and related flags
 * @param match - The match object
 * @returns Status information and computed values
 */
export function useMatchStatus(match: Match): UseMatchStatusReturn {
  const { status, liveStatus } = match;

  const statusDisplay = useMemo(() => getStatusDisplay(match), [match]);

  const isLive = status.type === "inprogress";
  const isFinished = status.type === "finished";
  const isNotStarted = status.type === "notstarted";
  const isCancelled = liveStatus === "Cancelled" || liveStatus === "CANCELLED";
  const isHalfTime = liveStatus === "HT";

  const minute = useMemo(() => {
    return isLive ? parseMinute(liveStatus) : null;
  }, [isLive, liveStatus]);

  const progress = useMemo(() => {
    if (isHalfTime) return 50;
    if (minute !== null) {
      return Math.min((minute / 90) * 100, 100);
    }
    return null;
  }, [isHalfTime, minute]);

  return {
    statusDisplay,
    isLive,
    isFinished,
    isNotStarted,
    isCancelled,
    isHalfTime,
    minute,
    progress,
  };
}
