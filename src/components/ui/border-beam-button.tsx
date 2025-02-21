"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";
import Link from "next/link";

interface BorderBeamButtonProps extends ButtonProps {
  beamSize?: number;
  beamDuration?: number;
  beamColorFrom?: string;
  beamColorTo?: string;
  beamInitialOffset?: number;
  href?: string;
}

export const BorderBeamButton = React.forwardRef<HTMLButtonElement, BorderBeamButtonProps>(
  ({ 
    className,
    variant = "outline",
    size = "default",
    children,
    beamSize = 40,
    beamDuration = 4,
    beamColorFrom = "rgba(255, 255, 255, 0.2)",
    beamColorTo = "rgba(255, 255, 255, 0.1)",
    beamInitialOffset = 20,
    href,
    ...props 
  }, ref) => {
    const buttonContent = (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "relative overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
        <BorderBeam
          size={beamSize}
          duration={beamDuration}
          colorFrom={beamColorFrom}
          colorTo={beamColorTo}
          initialOffset={beamInitialOffset}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        />
      </Button>
    );

    if (href) {
      return (
        <Link href={href}>
          {buttonContent}
        </Link>
      );
    }

    return buttonContent;
  }
);

BorderBeamButton.displayName = "BorderBeamButton"; 