"use client";
import React, { useState } from "react";
import { Box, Typography, Drawer } from "@mui/material";
import { styles } from "@/styles/dashboard/style";
import Topbar from "../_components/Topbar/index";
import SidebarDrawer from "../_components/Sidebar/index";
import DashboardContent from "../_components/DashboardContent";

export default function Dashboard() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={styles.root}>
            <Topbar handleDrawerToggle={handleDrawerToggle} />

            <Box component="nav" sx={styles.drawer}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={styles.temporaryDrawer}
                >
                    <SidebarDrawer />
                </Drawer>
                <Drawer variant="permanent" sx={styles.permanentDrawer} open>
                    <SidebarDrawer />
                </Drawer>
            </Box>

            <Box component="main" sx={styles.main}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={styles.pageTitle}
                >
                    Dashboard Overview
                </Typography>
                <DashboardContent />
            </Box>
        </Box>
    );
}
