import { cn } from "@/lib/utils";

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
}

export default function ProgressBar({ label, value, color }: ProgressBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-4">
        <span className="text-sm font-semibold text-ink/74">{label}</span>
        <span className="font-mono text-xs font-bold text-ink/44">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-ink/8" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
        <div className={cn("h-full rounded-full", color)} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
