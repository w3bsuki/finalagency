"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  User,
  Bot,
  Building2,
  Factory,
  Landmark,
  Brain,
  Sparkles,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { DialogTitle } from "@/components/ui/dialog";

const navigation = {
  agents: [
    {
      title: "AIDR",
      href: "/agents/aidr",
      description: "Your intelligent research assistant",
      icon: Brain,
    },
    {
      title: "AIDO",
      href: "/agents/aido",
      description: "The operations optimization expert",
      icon: Bot,
    },
    {
      title: "AIDY",
      href: "/agents/aidy",
      description: "Your development companion",
      icon: Sparkles,
    },
  ],
  solutions: [
    {
      title: "Business",
      href: "/solutions/business",
      description: "Strategic AI implementation",
      icon: Building2,
    },
    {
      title: "Industry",
      href: "/solutions/industry",
      description: "Tailored AI solutions",
      icon: Factory,
    },
    {
      title: "Government",
      href: "/solutions/government",
      description: "Seamless AI integration",
      icon: Landmark,
    },
  ],
};

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Command Menu</DialogTitle>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="AI Agents">
          {navigation.agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <CommandItem
                key={agent.href}
                onSelect={() => runCommand(() => router.push(agent.href))}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{agent.title}</span>
                <CommandShortcut>{agent.description}</CommandShortcut>
              </CommandItem>
            );
          })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Solutions">
          {navigation.solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <CommandItem
                key={solution.href}
                onSelect={() => runCommand(() => router.push(solution.href))}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{solution.title}</span>
                <CommandShortcut>{solution.description}</CommandShortcut>
              </CommandItem>
            );
          })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick Actions">
          <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Book Consultation</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
            <User className="mr-2 h-4 w-4" />
            <span>About Us</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
} 