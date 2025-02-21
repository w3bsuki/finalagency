"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";
import { BorderBeam } from "@/components/ui/border-beam";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function VercelChat() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (value.trim()) {
            // TODO: Implement chat submission logic here
            console.log("Submitting:", value);
            setValue("");
            adjustHeight(true);
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto space-y-8">
            <div className="w-full">
                <div className="relative bg-black/40 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-all duration-300">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Border Beam Effect */}
                    <BorderBeam 
                        colorFrom="rgba(255, 255, 255, 0.4)"
                        colorTo="rgba(255, 255, 255, 0.2)"
                        duration={6}
                        size={150}
                    />
                    
                    <div className="relative p-4">
                        <div className="relative">
                            <Textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder=""
                                className={cn(
                                    "w-full px-4 py-3",
                                    "resize-none",
                                    "bg-transparent",
                                    "border-none",
                                    "text-white text-sm",
                                    "focus:outline-none",
                                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                                    "min-h-[60px]"
                                )}
                                style={{
                                    overflow: "hidden",
                                }}
                            />
                            
                            {!value && (
                                <div className="absolute left-4 top-3 pointer-events-none">
                                    <TextShimmerWave 
                                        className="text-sm tracking-wider font-light [--base-color:rgba(255,255,255,0.3)] [--base-gradient-color:rgba(255,255,255,0.8)]"
                                        duration={2}
                                        spread={1.2}
                                        yDistance={-1}
                                        zDistance={5}
                                        scaleDistance={1.05}
                                    >
                                        Ask SYNTAI a question...
                                    </TextShimmerWave>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    className="group relative p-2 hover:bg-white/5 rounded-lg transition-all duration-300 flex items-center gap-1 overflow-hidden"
                                >
                                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                                        <BorderBeam 
                                            colorFrom="rgba(255, 255, 255, 0.4)"
                                            colorTo="rgba(255, 255, 255, 0.2)"
                                            duration={6}
                                            size={30}
                                        />
                                    </div>
                                    <div className="relative z-10 flex items-center gap-1">
                                        <Paperclip className="w-4 h-4 text-white/60 group-hover:text-white/80 transition-colors" />
                                        <span className="text-xs text-white/40 hidden group-hover:inline transition-all duration-300">
                                            Attach
                                        </span>
                                    </div>
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    className="relative px-2 py-1 rounded-lg text-sm text-white/60 transition-all duration-300 border border-dashed border-white/10 hover:border-white/20 hover:bg-white/5 flex items-center justify-between gap-1 hover:text-white/80 overflow-hidden"
                                >
                                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                                        <BorderBeam 
                                            colorFrom="rgba(255, 255, 255, 0.4)"
                                            colorTo="rgba(255, 255, 255, 0.2)"
                                            duration={6}
                                            size={30}
                                        />
                                    </div>
                                    <div className="relative z-10 flex items-center gap-1">
                                        <PlusIcon className="w-4 h-4" />
                                        Project
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className={cn(
                                        "relative px-1.5 py-1.5 rounded-lg text-sm transition-all duration-300 border flex items-center justify-between gap-1 overflow-hidden",
                                        value.trim()
                                            ? "bg-gradient-to-r from-blue-500 to-violet-500 border-transparent text-white hover:from-blue-600 hover:to-violet-600"
                                            : "border-white/10 hover:border-white/20 hover:bg-white/5 text-white/60 hover:text-white/80"
                                    )}
                                >
                                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                                        <BorderBeam 
                                            colorFrom="rgba(255, 255, 255, 0.4)"
                                            colorTo="rgba(255, 255, 255, 0.2)"
                                            duration={6}
                                            size={30}
                                        />
                                    </div>
                                    <div className="relative z-10">
                                        <ArrowUpIcon
                                            className={cn(
                                                "w-4 h-4",
                                                value.trim()
                                                    ? "text-white"
                                                    : "text-white/60 group-hover:text-white/80"
                                            )}
                                        />
                                    </div>
                                    <span className="sr-only">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-4">
                    <ActionButton
                        icon={<ImageIcon className="w-4 h-4" />}
                        label="Clone a Screenshot"
                    />
                    <ActionButton
                        icon={<Figma className="w-4 h-4" />}
                        label="Import from Figma"
                    />
                    <ActionButton
                        icon={<FileUp className="w-4 h-4" />}
                        label="Upload a Project"
                    />
                    <ActionButton
                        icon={<MonitorIcon className="w-4 h-4" />}
                        label="Landing Page"
                    />
                    <ActionButton
                        icon={<CircleUserRound className="w-4 h-4" />}
                        label="Sign Up Form"
                    />
                </div>
            </div>
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
    return (
        <button
            type="button"
            className="relative flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-white/5 rounded-full border border-white/10 hover:border-white/20 text-white/60 hover:text-white/80 transition-all duration-300 overflow-hidden"
        >
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <BorderBeam 
                    colorFrom="rgba(255, 255, 255, 0.4)"
                    colorTo="rgba(255, 255, 255, 0.2)"
                    duration={6}
                    size={50}
                />
            </div>
            <div className="relative z-10 flex items-center gap-2">
                {icon}
                <span className="text-xs">{label}</span>
            </div>
        </button>
    );
} 