import { Variants } from "framer-motion";

export const containerMovieCard: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

export const MovieCardItem: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export const fadeInUp: Variants = {
    initial: {
        y: 20,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut"
        }
    }
}