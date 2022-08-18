export const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};
export const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "200px", opacity: 1,
        transition: { delay: 0.5 }
    },

};