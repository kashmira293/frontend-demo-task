import React from "react";
import { styles } from "@/styles/dashboard/style";
import {
    Settings as SettingsIcon,
    Home as HomeIcon,
    BarChart as BarChartIcon,
    People as PeopleIcon,
    Article as ArticleIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    ListItemButton,
} from "@mui/material";
export default function SidebarDrawer() {
    return (
        <Box sx={styles.drawerContainer}>
            <Box sx={styles.drawerHeader}>
                <Typography variant="h6" sx={styles.drawerTitle}>
                    Admin Dashboard
                </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <List>
                {[{ text: "Dashboard", icon: <HomeIcon /> }].map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton sx={styles.listItemButton}>
                            <ListItemIcon sx={styles.listItemIcon}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
