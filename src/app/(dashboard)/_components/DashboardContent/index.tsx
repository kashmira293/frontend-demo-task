import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Avatar,
    Divider,
    Container,
} from "@mui/material";
import {
    Group as GroupIcon,
    Email as EmailIcon,
    Description as DescriptionIcon,
} from "@mui/icons-material";
import { Post, Product, User } from "@/app/types/dashboard/types";
import { styles, DRAWER_WIDTH } from "@/styles/dashboard/style";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getPostData, getUserData } from "@/redux/slices/dashboard/thunk";

export default function DashboardContent() {
    const { users, posts, isLoading } = useAppSelector(
        (state) => state.dashboard
    );

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUserData());
        dispatch(getPostData());
    }, []);

    if (isLoading) {
        return (
            <Box sx={styles.loaderContainer}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper sx={styles.statsCard}>
                    <Avatar
                        sx={{
                            ...styles.statsAvatar,
                            bgcolor: "#1976d2",
                        }}
                    >
                        <GroupIcon />
                    </Avatar>
                    <Box>
                        <Typography color="textSecondary" variant="subtitle2">
                            Total Users
                        </Typography>
                        <Typography variant="h4">{users.length}</Typography>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
                <Paper sx={styles.statsCard}>
                    <Avatar
                        sx={{
                            ...styles.statsAvatar,
                            bgcolor: "#2e7d32",
                        }}
                    >
                        <DescriptionIcon />
                    </Avatar>
                    <Box>
                        <Typography color="textSecondary" variant="subtitle2">
                            Total Posts
                        </Typography>
                        <Typography variant="h4">{posts.length}</Typography>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
                <Paper sx={styles.statsCard}>
                    <Avatar
                        sx={{
                            ...styles.statsAvatar,
                            bgcolor: "#ed6c02",
                        }}
                    >
                        <EmailIcon />
                    </Avatar>
                    <Box>
                        <Typography color="textSecondary" variant="subtitle2">
                            Avg Posts per User
                        </Typography>
                        <Typography variant="h4">
                            {(posts.length / users.length).toFixed(1)}
                        </Typography>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={styles.contentCard}>
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Recent Users
                        </Typography>
                        <List>
                            {users.slice(0, 5).map((user) => (
                                <React.Fragment key={user.id}>
                                    <ListItem>
                                        <ListItemText
                                            primary={user.name}
                                            secondary={user.email}
                                        />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>


            <Grid item xs={12} md={6}>
                <Card sx={styles.contentCard}>
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Recent Posts
                        </Typography>
                        <List>
                            {posts.slice(0, 5).map((post) => (
                                <React.Fragment key={post.id}>
                                    <ListItem>
                                        <ListItemText
                                            primary={post.title}
                                            secondary={
                                                post.body.slice(0, 100) + "..."
                                            }
                                        />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
