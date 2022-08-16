export const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};
export const checkBox = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};
export const checkBox2 = {
    hidden: {
        x: 100,
        scale: 1,
        opacity: 0,

    },
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.4,
            delay: 0
        }
    },

}
export const item = {
    hidden: {
        x: -100,
        scale: 1,
        opacity: 0,

    },
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.3,
            delay: 0.4
        }
    },

}
export const item2 = {
    hidden: {
        x: 100,
        scale: 1,
        opacity: 0,

    },
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.4,
            delay: 0.6
        }
    },

}
export const item3 = {
    hidden: {
        y: -100,
        scale: 1,
        opacity: 0

    },
    visible: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.4,
            delay: 0.9
        }
    },
    exit: {
        y: 200,
        scale: 0,
        opacity: 0
    }

}
export const party = {
    hidden: {
        x: -100,
        scale: 1,
        opacity: 0,

    },
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
            delay: 1
        }
    },

    exit: {
        y: 200,
        scale: 0,
        opacity: 0
    }

}
export const button = {
    hidden: {
        scale: 0,
        opacity: 0,

    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
            delay: 1.1
        }
    },

    exit: {
        y: 200,
        scale: 0,
        opacity: 0
    }

}
export const arrow = {
    hidden: {
        x: -100,
        scale: 1,
        opacity: 0,

    },
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
            delay: 1
        }
    },

    exit: {
        y: 200,
        scale: 0,
        opacity: 0
    }

}
export const arrow2 = {
    hidden: {
        x: -100,
        scale: 1,
        opacity: 0,

    },
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
            delay: 2.7
        }
    },

    exit: {
        y: 200,
        scale: 0,
        opacity: 0
    }

}