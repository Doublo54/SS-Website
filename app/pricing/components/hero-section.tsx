"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUpDelayed } from "../lib/constants";
import { DexCard } from "./dex-card";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
            <div className="container relative">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="mx-auto text-center max-w-3xl"
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text">
                        Decentralized Price Oracle
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Get real-time price data from multiple DEXs across different chains. Built for developers, by developers.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/docs">
                            <Button size="lg" className="group relative overflow-hidden hover:scale-105 transition-transform">
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Button>
                        </Link>
                        <Link href="/docs/api">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="group relative overflow-hidden hover:scale-105 transition-transform"
                            >
                                View API Docs
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 