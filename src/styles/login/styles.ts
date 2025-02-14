export const loginStyles = {
  wrapper: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(150deg, #ffffff 0%, #f0f4f8 100%)", 
      padding: { xs: 2, sm: 4 },
      position: "relative",
      overflow: "hidden",
      "&:before": {
          content: '""',
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(#cce7f9 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
      },
  },
  paper: {
      width: "100%",
      p: { xs: 3, sm: 4, md: 5 },
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: 4,
      boxShadow: "0 12px 40px rgba(14, 55, 90, 0.1)",
      backdropFilter: "blur(8px)", 
      position: "relative",
      overflow: "visible",
  },
  logoWrapper: {
      mb: 4,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      zIndex: 1,
  },
  logoContainer: {
      position: "relative",
      mb: 3,
      "&:after": {
          content: '""',
          position: "absolute",
          inset: "-8px",
          background: "linear-gradient(45deg, #34d399 0%, #10b981 100%)",
          borderRadius: "20%",
          zIndex: 0,
          opacity: 0.1,
      },
  },
  logoBox: {
      background: "white",
      p: 2,
      borderRadius: 3,
      boxShadow: "0 4px 20px rgba(99, 102, 241, 0.15)", 
      position: "relative",
      zIndex: 1,
      transition: "transform 0.3s ease",
      "&:hover": {
          transform: "translateY(-2px)",
      },
      "& img": {
          filter: "drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2))", 
      },
  },
  title: {
      fontSize: { xs: "1.8rem", sm: "2.125rem" },
      fontWeight: 700,
      color: "#2d3748", 
      mb: 1,
      letterSpacing: "-0.5px",
  },
  subtitle: {
      color: "#4a5568", 
      fontSize: "1rem",
      mb: 3,
      maxWidth: "280px",
      lineHeight: 1.6,
  },
  textField: {
      mb: 2,
      "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          backgroundColor: "#edf2f7", 
          transition: "all 0.2s ease",
          "&:hover": {
              backgroundColor: "#e2e8f0", 
          },
          "& fieldset": {
              borderColor: "#10b981", 
              borderWidth: "2px",
          },
          "&:hover fieldset": {
              borderColor: "#10b981",
          },
          "&.Mui-focused fieldset": {
              borderColor: "#10b981",
              boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
          },
      },
      "& .MuiInputBase-input": {
          padding: "14px 16px",
      },
      "& .MuiInputLabel-root": {
            color: "#10b981",
            fontWeight: 500,
            transform: "translate(14px, 16px) scale(1)", 
            "&.Mui-focused, &.MuiInputLabel-shrink": {
                color: "#10b981",
                transform: "translate(14px, -9px) scale(0.75)",  
            },
        "&.Mui-error": {
            color: "red", 
        },
    }

  },
  formOptionsRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 2,
  },
  checkbox: {
      color: "#10b981", 
      "&.Mui-checked": {
          color: "#059669", 
      },
  },
  forgotPassword: {
      cursor: "pointer",
      "&:hover": {
          textDecoration: "underline",
      },
      color: "#10b981", 
  },
  loginWithGoogle: {
      mt: 2,
      borderColor: "#10b981", 
      color: "#10b981",
  },
  RememberMe: {
      "&.Mui-checkbox-label": {
          background: "#e6fffa", 
          color: "#10b981", 
      },
  },
  button: {
      mt: 3,
      mb: 2,
      height: 48,
      borderRadius: 2,
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 600,
      background: "linear-gradient(45deg, #10b981 0%, #059669 100%)", 
      boxShadow: "0 4px 12px rgba(99, 102, 241, 0.25)",
      transition: "all 0.2s ease",
      "&:hover": {
          boxShadow: "0 6px 16px rgba(99, 102, 241, 0.35)", 
          transform: "translateY(-1px)",
      },
      "&.Mui-disabled": {
          background: "#5fc899",
          color: "#94a3b8",
      },
  },
};
