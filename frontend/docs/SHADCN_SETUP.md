# shadcn/ui Setup Guide

## Installation

Run:
npx shadcn-ui@latest init

## Choose:
- Framework: Next.js
- TypeScript: Yes
- Tailwind: Yes

## Install Components
Example:
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog

## Configuration
- Ensure tailwind.config.ts is updated
- Use CSS variables for theming

## Usage
Import like:
import { Button } from "@/components/ui/button"

## Rule
Always use shadcn components before building custom ones