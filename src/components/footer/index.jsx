import React from "react";
import { Box, Container, Grid, Typography, styled, Link } from "@mui/material";

const FooterComponent = styled("footer")(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: "20px 0",
  marginTop: "auto",
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  "& button": {
    backgroundColor: "white",
    color: theme.palette.primary.main,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "background 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "0.875rem",
  fontWeight: 500,
  transition: "color 0.3s",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.75rem",
  fontWeight: 500,
  display: "block",
  padding: "1rem 0",
}));

const SocialIcon = ({ icon, link }) => {
  return (
    <button>
      <i className={`fab ${icon}`}></i>
    </button>
  );
};

const Footer = () => {
  return (
    <FooterComponent>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: "primary.main" }}
            >
              Let's keep in touch!
            </Typography>
            <Typography
              variant="h5"
              sx={{ mt: 2, mb: 4, color: "text.primary" }}
            >
              Find us on any of these platforms, we respond 1-2 business days.
            </Typography>
            <SocialIcons>
              <SocialIcon icon="fa-twitter" />
              <SocialIcon icon="fa-facebook-square" />
              <SocialIcon icon="fa-dribbble" />
              <SocialIcon icon="fa-github" />
            </SocialIcons>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="space-between">
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                  Useful Links
                </Typography>
                <ul>
                  <li>
                    <FooterLink href="https://www.creative-tim.com/presentation?ref=njs-profile">
                      About Us
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="https://blog.creative-tim.com?ref=njs-profile">
                      Blog
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="https://www.github.com/creativetimofficial?ref=njs-profile">
                      Github
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                      Free Products
                    </FooterLink>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                  Other Resources
                </Typography>
                <ul>
                  <li>
                    <FooterLink href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">
                      MIT License
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="https://creative-tim.com/terms?ref=njs-profile">
                      Terms &amp; Conditions
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="https://creative-tim.com/privacy?ref=njs-profile">
                      Privacy Policy
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="https://creative-tim.com/contact-us?ref=njs-profile">
                      Contact Us
                    </FooterLink>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr style={{ borderColor: "#90a4ae" }} />
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="body2">
              Copyright © <span id="get-current-year">2021</span>
              <FooterLink
                href="https://www.creative-tim.com/product/notus-js"
                target="_blank"
              >
                Notus JS by
                <FooterLink href="https://www.creative-tim.com?ref=njs-profile">
                  Creative Tim
                </FooterLink>
                .
              </FooterLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterComponent>
  );
};

export default Footer;
