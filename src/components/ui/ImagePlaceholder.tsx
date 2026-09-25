import imageIcon from "@/assets/icons/image.svg"
import { cn } from "@/lib/cn"

type ImagePlaceholderProps = {
  className?: string
  label?: string
}

/** Grey "Thumbnail Placeholder" block from the design system. */
export default function ImagePlaceholder({
  className,
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn(
        "flex items-center justify-center overflow-hidden bg-slate-200 p-2.5",
        className,
      )}
    >
      <img src={imageIcon} alt="" width={50} height={50} />
    </div>
  )
}
