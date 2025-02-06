import { cn } from "@/lib/utils";
import * as React from "react";

export type TimelineProps = React.ComponentPropsWithoutRef<"ol"> & {};

export const Timeline = React.forwardRef<
  React.ComponentRef<"ol">,
  TimelineProps
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    role="list"
    className={cn("flex flex-col", className)}
    {...props}
  />
));
Timeline.displayName = "Timeline";

export const TimelineItem = React.forwardRef<
  React.ComponentRef<"li">,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("flex gap-4", className)} {...props} />
));
TimelineItem.displayName = "TimelineItem";

export const TimelineSeparator = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-center", className)}
    {...props}
  />
));
TimelineSeparator.displayName = "TimelineSeparator";

export interface TimelineDotProps
  extends React.ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "outline";
}

export const TimelineDot = React.forwardRef<
  React.ComponentRef<"div">,
  TimelineDotProps
>(({ variant = "default", className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex size-4 items-center justify-center mt-1 empty:after:block empty:after:rounded-full empty:after:outline-current [&_svg]:size-4",
      variant === "default" && "empty:after:size-2.5 empty:after:bg-current",
      variant === "outline" && "empty:after:size-2 empty:after:outline",
      className
    )}
    {...props}
  />
));
TimelineDot.displayName = "TimelineDot";

export const TimelineConnector = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 bg-border my-2 w-0.5", className)}
    {...props}
  />
));
TimelineConnector.displayName = "TimelineConnector";

export const TimelineContent = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 pb-7 first:text-right last:text-left", className)}
    {...props}
  />
));
TimelineContent.displayName = "TimelineContent";

export const TimelineTitle = React.forwardRef<
  React.ComponentRef<"h3">,
  React.ComponentPropsWithoutRef<"h3">
>((props, ref) => <h3 ref={ref} {...props} />);
TimelineTitle.displayName = "TimelineTitle";

export const TimelineDescription = React.forwardRef<
  React.ComponentRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[0.8em] text-muted-foreground", className)}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";
