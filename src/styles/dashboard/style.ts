export const DRAWER_WIDTH = 280;

const colors = {
    primary: "#10b981",
    error: "#d32f2f",
    text: "#333333",
    border: "#e0e0e0",
    background: {
        default: "#f5f5f5",
        paper: "#ffffff",
        hover: "rgba(0, 0, 0, 0.04)",
    },
};

export const styles = {
    root: {
        display: "flex",
    },
    loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 169px)",
    },
    appBar: {
        zIndex: 1200,
        bgcolor: colors.background.paper,
        color: colors.text,
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    menuButton: {
        mr: 2,
        display: { sm: "none" },
    },
    searchBox: {
        position: "relative",
        borderRadius: 1,
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
        },
        marginRight: 2,
        marginLeft: 0,
        width: "100%",
        maxWidth: 400,
    },
    searchIcon: {
        position: "absolute",
        p: 2,
        color: "rgba(0, 0, 0, 0.54)",
    },
    searchInput: {
        color: colors.text,
        pl: 6,
        pr: 1,
        py: 1,
        width: "100%",
    },
    avatar: {
        width: 32,
        height: 32,
        ml: 1,
        bgcolor: colors.primary,
        cursor: "pointer",
    },
    drawer: {
        width: { sm: DRAWER_WIDTH },
        flexShrink: { sm: 0 },
    },
    temporaryDrawer: {
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            bgcolor: colors.background.paper,
            borderRight: `1px solid ${colors.border}`,
        },
    },
    permanentDrawer: {
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            bgcolor: colors.background.paper,
            borderRight: `1px solid ${colors.border}`,
        },
    },
    drawerContainer: {
        py: 2,
        color: colors.text,
    },
    drawerHeader: {
        px: 2.5,
        mb: 3,
    },
    drawerTitle: {
        color: colors.primary,
        fontWeight: "bold",
    },
    main: {
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        mt: 8,
        height: {
            xs: "fit-content",
            md: "fit-content",
            lg: "fit-content",
            xl: "calc(100vh - 64px)",
        },
        bgcolor: colors.background.default,
    },
    pageTitle: {
        mb: 4,
        fontWeight: "bold",
        color: colors.text,
    },
    logoutButton: {
        color: colors.error,
        "&:hover": {
            bgcolor: "rgba(211, 47, 47, 0.04)",
        },
    },
    listItemButton: {
        "&:hover": {
            bgcolor: colors.background.hover,
        },
    },
    listItemIcon: {
        minWidth: 40,
        color: colors.text,
    },
    statsCard: {
        p: 2,
        display: "flex",
        alignItems: "center",
        bgcolor: colors.background.paper,
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    statsAvatar: {
        mr: 2,
    },
    contentCard: {
        bgcolor: colors.background.paper,
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
};
